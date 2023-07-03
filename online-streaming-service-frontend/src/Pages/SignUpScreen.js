import React, { useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";

import "../Css/SignUpScreen.css";

import MainLogo from "../assets/MainLogo.png";
import { SimpleTextInput } from "../Components/TextInput";
import { PurpleButton } from "../Components/Button";

const SignUpScreen = (props) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return(
    <div className="signup-screen">
      <div className="signup-screen-cont wid-95-cnt">

        <div className="dsp-flx-rw main-logo">
          <img src={MainLogo} className="main-inc-sz"/>
          <p className="clr-white mrg-0 fnt-sz-2 fnt-wt-bold">WATCH</p>
        </div>

        <div className="main-cont-signup dsp-flx-rw">
          <div className="flx-1">
            <p className="mrg-0 fnt-sz-2 clr-white fnt-wt-bold signup-title">Enter your details to Sign Up !!</p>

            <SimpleTextInput 
              placeholderTxt="Enter Your Email"
              value={email}
              setValue={setEmail}
              inputStyle={{width:"60%"}}
            />

            <SimpleTextInput 
              placeholderTxt="Enter Your Password"
              value={password}
              setValue={setPassword}
              inputStyle={{width:"60%"}}
            />

            <PurpleButton 
              buttTxt="signup"
              style={{width:"60%",marginLeft:"auto",marginRight:"auto",marginTop:"4vh",marginBottom:"2vh"}}
            />

            <p className="clr-white fnt-sz-2">Already have an account, <u 
              onClick={() => {
                window.location.replace("/login");
              }}>Login</u> 
            </p>
          </div>

          <div className="flx-2">
            <p className="mrg-0 fnt-sz-2 clr-white fnt-wt-bold signup-title">Choose a Plan</p>
            
            <div className="subscription-card-cont dsp-flx-rw">


              <div className="subscription-card-indi">
                <div className="subscription-card-indi-header-cont">
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-bold">Basic</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 150</p>
                </div>

                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Basic</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 150</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">resolution</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >360 p</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Video Quality</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >Good</p>
                </div>
              </div>

              <div className="subscription-card-indi">
                <div className="subscription-card-indi-header-cont">
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-bold">Standard</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 250</p>
                </div>

                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Standard</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 250</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">resolution</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >720 p</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Video Quality</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >Better</p>
                </div>
              </div>

              <div className="subscription-card-indi">
                <div className="subscription-card-indi-header-cont">
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-bold">Premium</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 350</p>
                </div>

                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Premium</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >₹ 350</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">resolution</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >1080 p</p>
                </div>
                <div className="subscription-card-indi-desc-cont">
                  <p className="mrg-0 clr-gry-light fnt-sz-3 fnt-wt-700">Video Quality</p>
                  <p className="mrg-0 clr-white fnt-sz-2 fnt-wt-700" >Best</p>
                </div>
              </div>

            </div>

          </div>
        </div>

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

export default connect(mapStateToProps, {})(SignUpScreen);
