import React from "react";
import "./Picture.css";

const Picture = (props) => (
    <div className="pic" onClick={() => props.evaluateClick(props.id)}>
        <img className="color" alt={props.name} src={props.image} />
    </div>
);

export default Picture;