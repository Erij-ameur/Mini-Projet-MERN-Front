import React from 'react'
import './../Styles/Button.css'
const Button = (props) => {
    return (
        <button onClick={props.Action} type="button" className={`StandardBtn ${props.class}`}> {props.Name}</button>
    )
}

export default Button
