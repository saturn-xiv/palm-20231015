use hyper::StatusCode;
use rusoto_core::{request::HttpClient, Region};
use rusoto_sqs::{
    CreateQueueRequest, GetQueueUrlRequest, ReceiveMessageRequest, SendMessageRequest,
    Sqs as AwsSqs, SqsClient,
};

use super::super::{HttpError, Result};

pub trait Handler {
    fn handle(&self, body: &str) -> Result<()>;
}

/// https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html
pub struct Sqs {
    client: SqsClient,
}

impl Sqs {
    pub fn new(cred: super::Credentials, region: Region) -> Result<Self> {
        Ok(Self {
            client: SqsClient::new_with(HttpClient::new()?, cred.provider(), region),
        })
    }

    pub async fn create_queue(&self, name: String) -> Result<()> {
        self.client
            .create_queue(CreateQueueRequest {
                queue_name: name,
                ..Default::default()
            })
            .await?;
        Ok(())
    }

    async fn get_queue_url(&self, name: &str) -> Result<String> {
        if let Some(it) = self
            .client
            .get_queue_url(GetQueueUrlRequest {
                queue_name: name.to_string(),
                ..Default::default()
            })
            .await?
            .queue_url
        {
            return Ok(it);
        }

        Err(Box::new(HttpError(
            StatusCode::INTERNAL_SERVER_ERROR,
            Some(format!("can't find queue {}", name)),
        )))
    }

    pub async fn publish(&self, queue: &str, body: &str) -> Result<()> {
        self.client
            .send_message(SendMessageRequest {
                message_body: body.to_string(),
                queue_url: self.get_queue_url(queue).await?,
                ..Default::default()
            })
            .await?;
        Ok(())
    }
    pub async fn consume<H: Handler>(&self, queue: &str, handler: &H) -> Result<()> {
        if let Some(items) = self
            .client
            .receive_message(ReceiveMessageRequest {
                queue_url: self.get_queue_url(queue).await?,
                ..Default::default()
            })
            .await?
            .messages
        {
            for it in items {
                if let Some(ref body) = it.body {
                    handler.handle(body)?;
                }
            }
        }
        Ok(())
    }
}
