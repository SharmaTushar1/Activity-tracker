import React, { useState } from 'react';
import uuid from 'react-uuid';
import Card from './Card';
import './ToDo.css'

function ToDo(props) {
  const [toDos, setToDos] = useState([]); //list of all todos
  const [toDo, setToDo] = useState({
    title: "",
    description: "",
    complexity: "",
    deadline: "", 
    reporter: "",
    assignee: ""
  })
  const [hidden, setHidden] = useState(true);
  const [val, setVal] = useState('Add Value');
  // Deadline, title, description, complexity, reporter, assignee.

  function changeVal() {
    setVal(hidden?'Add value':'Click to Add value')
  }  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setToDo((prevToDo) => {
      return {
      ...prevToDo,
      [name]: value
      }
    })
  }

  const addValue = () => {
    setToDos((prevToDos) => {
      return [
        ...prevToDos,
        toDo
      ]
    })
  }

  return (
    <div>
      <div>
        <h1>To Do</h1>
        <button onClick={() => {setHidden(!hidden); changeVal(); if(!hidden) addValue();}}>{val}</button>
        <div className ={hidden?'addItem-hidden':'addItem-visible'}>
          <label htmlFor="toDo-deadline">
            Deadline: 
          </label>
          <input id="toDo-deadline" name='deadline' type="date" onChange={handleChange}/>
          <label htmlFor="title">
            Title: 
          </label>
          <input type="text" id="title" name = "title" onChange={handleChange}/>
          <label htmlFor="description">
            Description: 
          </label>
          <input type="text" id = "description" name = "description" onChange={handleChange}/>
          <label htmlFor="complexity">
            Choose complexity: 
          </label>
          <select name="complexity" id="complexity" onChange={handleChange}>
            <option value="hard">
              Hard
            </option>
            <option value="medium">
              Medium
            </option>
            <option value="easy">
              Easy
            </option>
          </select>
          <label htmlFor="assignee">Assignee Name: </label>
          <input type="text" id = "assignee" name = "assignee" onChange={handleChange}/>
          <label htmlFor="reporter">Reporter: </label>
          <input type="text" id = "reporter" name = "reporter" onChange={handleChange}/>
        </div>
      </div>
      <div>
        {toDos.map((toDo) => {
          return <Card 
            key = {uuid()}
            title = {toDo.title}
            description = {toDo.description}
            complexity = {toDo.complexity}
            assignee = {toDo.assignee}
            reporter = {toDo.reporter}
            deadline = {toDo.deadline}
          />
        })}
      </div>
    </div>
  )
}

export default ToDo