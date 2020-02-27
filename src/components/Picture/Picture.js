import React from "react";
import "./Picture.css";

const Picture = (props) => (
    <div className="pic">
        <div className="color">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default Picture;