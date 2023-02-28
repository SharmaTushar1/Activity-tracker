import React from 'react'

export const toDoCardView = (props) => {
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
