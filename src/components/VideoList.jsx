var VideoList = () => (
  <div className="video-list">
    <div>
     <VideoListEntry/>

    </div>

    <div>
    <VideoListEntry/>
    
    </div>
    <div>
    	<VideoListEntry/>
    </div> 
    <div>
    	<VideoListEntry/>
    </div>
  </div>
);
class 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  a: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

