import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.deadline}</span>
      <span>{props.assignee}</span>
      <span>{props.reporter}</span>
      <span>{props.complexity}</span>
    </div>
  )
}

export default Card