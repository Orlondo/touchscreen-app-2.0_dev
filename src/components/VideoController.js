import React from 'react';
import { Player, BigPlayButton } from 'video-react';

let videoArray = [
    "videos/link-75th-anniversary-video.mp4",
    "videos/link-corporate-video.mp4", 
    "videos/link-final-1080p.mp4"
];

const VideoController = () => {
    return (
        console.log(videoArray)
    )
}

export const test= (props) => {

    this.setState(() => {
        return {
            media: 
                <Player
                    preload={"auto"}
                    playsInline
                    fluid={false}
                    autoPlay={true}
                    // poster="images/_assets/poster.png"
                    src={videoArray[0]}
                >
                    <BigPlayButton position="center" />
                </Player>

        }
    })
}



export default VideoController;