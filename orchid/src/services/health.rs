use palm::thrift::cactus::protocols::HealthSyncHandler;

pub struct Service;

impl HealthSyncHandler for Service {
    fn handle_check(&self) -> thrift::Result<()> {
        info!("health check");
        Ok(())
    }
}
