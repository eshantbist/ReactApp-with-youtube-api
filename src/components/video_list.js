import React from 'react';
import VideoListItems from './video_list_items';

const VideoList=(props)=>{

	const videos=props.videos.map((video)=>{
		return (
			<VideoListItems 
			key={video.etag} 
			video={video}
			onVideoSelect={props.onVideoSelect}/>
			);
		});

	return( 
	<ul className="col-md-4 list-group">
	{videos}
	</ul>);
};
export default VideoList;