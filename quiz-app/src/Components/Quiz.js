import React from 'react'

export function Quiz(props) {
    return (
        <div>
            <p>Category: {props.item.category}</p>
            <p>Difficulty: {props.item.difficulty}</p>
            <p>Question: {props.item.question}</p>
            <p>Answer:</p>
            <button onClick={props.onClickAnswer}>{props.item.correct_answer}</button>
            {props.item.incorrect_answers.map(incorrect => <button onClick={props.onClickAnswer}>{incorrect}</button>)}
        </div>
    )
}