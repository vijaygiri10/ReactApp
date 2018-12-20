import React from "react"

function Card(props) {
    
    console.log(props)
    
    return(
        <div>
            <img src={props.imgUrl} alt="" />
            <h2>{props.name}</h2>
            <h3>Phone : {props.phone}</h3>
            <h3>Email: {props.email}</h3>
        </div>
    )
}

export default Card