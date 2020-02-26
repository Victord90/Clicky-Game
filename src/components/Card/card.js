import React from "react";
import "./style.css";


function Card (props) {
    return (
        <div className="imgContainer">
            <img onClick={() => props.imageClicked(props.id, props.name,props.clicked)} src={props.image} alt={props.name} key={props.id}/>
        </div>
    );
}


export default Card;