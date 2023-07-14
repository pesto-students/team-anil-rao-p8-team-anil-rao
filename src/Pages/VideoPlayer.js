import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";
import "../Css/VideoPlayer.css";
import Hls from "hls.js";
import BackIcn from "../assets/back.png";

import FullScreenIcn from "../assets/player-icons/fullscreen.png";
import PlayIcn from "../assets/player-icons/play.png";
import PauseIcn from "../assets/player-icons/pause.png";
import SettingIcn from "../assets/player-icons/setting.png";
import VolumeIcn from "../assets/player-icons/volume.png";



const VideoPlayer = ({style={},onBackPressedFunc=() => {},contentData={},quality="basic"}) => {
  const playerRef = useRef()
  const [play,setPlay] = useState(false);
  const [duration,setDuration] = useState(0);
  const [currentTime,setCurrentTime] = useState(0);

  useEffect(() => {
    const video = document.getElementById('video');
    const hls = new Hls();
    console.log("contentData IS -> ",contentData)
    // const videoSrc = `https://hls-test.moneyyapp.in/videos-output/${data.fileEndpoint}/360.m3u8`;             
    let mode = quality == "basic" ? "360" : (quality == "standard" ? "720" : "1080");
    const videoSrc = "fileUrl" in contentData ? contentData.fileUrl : `https://online-streaming-service-backend.moneyyapp.in/videos-output/${contentData?.contentFileEndpoint}/${mode}.m3u8`;             
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() { 
      // video.play(); 
    });
  },[])
  useEffect(( ) => {
    if(play)
    {
      playerRef.current.play()
    }
    else
    {
      playerRef.current.pause()
    }
  },[play])
  return(
    <div className="video-player-cont">
      {/* BACK BUTTON */}
      <div className="back-butt" onClick={() => {
        console.log("BACK BUTTON PRESSED!!")
        onBackPressedFunc();
      }}>
        <img src={BackIcn}/>
      </div>
      <video id="video" ref={playerRef} controls className="video-player"
        // onLoadedMetadata={() => {
        //   const video = playerRef.current;
        //   if (!video) return;
        //   setDuration(video.duration)
        // }}
        
        // onTimeUpdate={(val) => {
        //   console.log("VALUE IS ->",val.timeStamp)
        //   setCurrentTime((val.timeStamp)/3600)
        // }}
      />
      {/* PLAYER CONTROLS */}
      {/* <div className="players-controls-cont dsp-flx-rw">
        <div className="dsp-flx-rw">
          <img src={play ? PauseIcn : PlayIcn} className="player-icns" onClick={() => {
            setPlay(!play)
          }}/>
        </div>
        <div className="slider-cont dsp-flx-rw">
          <input 
            type="range"
            className="slider"
          />
          <p className="mrg-0 fnt-sz-3 clr-white fnt-wt-700">{Math.floor((Math.floor(currentTime/60))/60)}:{Math.floor((Math.floor(currentTime/60))%60)}:{Math.floor(currentTime%60)} / {Math.floor((Math.floor(duration/60))/60)}:{Math.floor((Math.floor(duration/60))%60)}:{Math.floor(duration%60)}</p>
        </div>

        <div className="dsp-flx-rw plyr-right-icns ">
          <img src={VolumeIcn} className="player-icns"/>
          <img src={SettingIcn} className="player-icns"/>
          <img src={FullScreenIcn} className="player-icns"/>
        </div>
        
      </div> */}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    //Here State.post is
    //Coming From -> "./reducers/index.js"
    //where "item" is defined under combineReducers
    appData: state.appData,
  };
};

export default connect(mapStateToProps, {})(VideoPlayer);
