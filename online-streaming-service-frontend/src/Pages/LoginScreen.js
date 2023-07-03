import React, { useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";

import "../Css/LoginScreen.css";
import MainLogo from "../assets/MainLogo.png";
import { SimpleTextInput } from "../Components/TextInput";
import { PurpleButton } from "../Components/Button";

const LoginScreen = (props) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return(
    <div className="login-screen">
      <div className="login-screen-cont wid-95-cnt">

        <div className="dsp-flx-rw main-logo">
          <img src={MainLogo} className="main-inc-sz"/>
          <p className="clr-white mrg-0 fnt-sz-2 fnt-wt-bold">WATCH</p>
        </div>

        <div className="main-cont-login">
          <p className="mrg-0 fnt-sz-0 clr-white fnt-wt-bold login-title">Login</p>
          
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
            buttTxt="LogIn"
            style={{width:"60%",marginLeft:"auto",marginRight:"auto",marginTop:"4vh",marginBottom:"2vh"}}
          />

          <p className="clr-white fnt-sz-2">Don't have an account, <u 
            onClick={() => {
              window.location.replace("/signup");
            }}>SignUp</u> 
          </p>
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

export default connect(mapStateToProps, {})(LoginScreen);
