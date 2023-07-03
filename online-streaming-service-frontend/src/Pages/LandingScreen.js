import React, { useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";

import "../Css/LandingScreen.css";
import MainLogo from "../assets/MainLogo.png";
import { PurpleButton } from "../Components/Button";

const LandingScreen = (props) => {
  return(
    <div className="landing-screen">
      <div>
        <div className="dsp-flx-rw landing-screen-main-icn">
          <img src={MainLogo} className="main-inc-sz"/>
          <p className="clr-white mrg-0 fnt-sz-2 fnt-wt-bold">WATCH</p>
        </div>
        <p className="margin-0 clr-white fnt-sz-3">Enjoy the Newest content.</p>
        <PurpleButton
          buttTxt="Login"
          onClick={() => {
            window.location.replace("/login");
          }}
        />
        <p className="margin-0 clr-white fnt-sz-3">Don't have an account, <u 
          onClick={() => {
            window.location.replace("/signup");
          }}>SignUp</u> </p>
      </div>
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

export default connect(mapStateToProps, {})(LandingScreen);
