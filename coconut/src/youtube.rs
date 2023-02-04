use std::path::PathBuf;

use clap::{Parser, Subcommand};
use palm::{google::youtube::Client, Result};

#[derive(Parser, PartialEq, Eq, Debug)]
pub struct Action {
    #[arg(short = 'c', long)]
    pub credential: PathBuf,
    #[command(subcommand)]
    pub command: SubCommand,
}

impl Action {
    pub async fn launch(&self) -> Result<()> {
        let cli = Client {
            config: self.credential.clone(),
        };
        match self.command {
            SubCommand::PlaylistList => {
                playlist_list(&cli).await?;
            }
            SubCommand::VideoList => {
                video_list(&cli).await?;
            }
            SubCommand::VideoUpload(ref cfg) => {
                cfg.launch(&cli).await?;
            }
            SubCommand::VideoRemove(ref cfg) => {
                cfg.launch(&cli).await?;
            }
        }
        Ok(())
    }
}

#[derive(Subcommand, PartialEq, Eq, Debug)]
pub enum SubCommand {
    #[clap(about = "Upload a video")]
    VideoUpload(VideoUpload),
    #[clap(about = "List all videos")]
    VideoList,
    #[clap(about = "Remove a video")]
    VideoRemove(VideoRemove),
    #[clap(about = "List all playlists")]
    PlaylistList,
}

pub async fn video_list(_cli: &Client) -> Result<()> {
    // TODO
    Ok(())
}

pub async fn playlist_list(cli: &Client) -> Result<()> {
    for it in cli.playlists().await?.iter() {
        println!("{it}");
    }
    Ok(())
}

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct VideoUpload {
    #[arg(short = 'F', long)]
    pub folder: PathBuf,
}

impl VideoUpload {
    pub async fn launch(&self, _cli: &Client) -> Result<()> {
        // TODO
        Ok(())
    }
}

#[derive(Parser, PartialEq, Eq, Debug, Clone)]
pub struct VideoRemove {
    #[arg(short = 'i', long)]
    pub id: String,
}

impl VideoRemove {
    pub async fn launch(&self, _cli: &Client) -> Result<()> {
        // TODO
        Ok(())
    }
}
