import React from "react";


const Card = (props) => {
    return (
        <div>
            <img onClick={() => props.imageClicked(props.id, props.name,props.clicked)} src={props.image} alt={props.name} key={props.id}/>
        </div>
    )
}


export default Card;