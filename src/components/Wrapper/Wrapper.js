import React from "react";
import "./Wrapper.css";

const Wrapper = props =>
    <div className="wrap">
        {props.children}
    </div>;


export default Wrapper;