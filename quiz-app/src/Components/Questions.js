import React from 'react'

export function Questions (props) {
    return(
        <div>
            <p>Get a random quiz by clicking below</p>
            <button type='button' onClick={props.onClick}>Get Question</button>
        </div>
    )
}