import React, { useState } from "react";
import { connect } from "react-redux";
import "../Css/utils.css";

const Basetemplate = (props) => {
  return(
    <div>
      <p>Test</p>
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

export default connect(mapStateToProps, {})(Basetemplate);
