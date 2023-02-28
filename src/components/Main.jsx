import React, { useState } from 'react'
import Completed from './Completed';
import InProgress from './InProgress';
import ToDo from './ToDo';
import './Main.css'

function Main() {
  const [people, setPeople] = useState([]);
  return (
  <div className = "container">
    <div className = "container-left"> 
      <ToDo
        // title = {}
        // description = {}
        // complexity = {}
        // reporter = {}
        // assignee = {}
        // deadline = {}
      /> 
    </div>
    <div className = "container-mid">
      <InProgress /> 
    </div>
    <div className = "container-right">
      <Completed />
    </div>
  </div>
  )
}

export default Main