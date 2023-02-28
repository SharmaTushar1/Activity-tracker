import './App.css';
import ToDo from './components/ToDo';
import {useState} from 'react';
import uuid from 'react-uuid';
import Main from './components/Main';

function App() {
  const [toDos, setToDos] = useState(localStorage.toDos?JSON.parse(localStorage.toDos):[]);
  const [inProgress, setInProgress] = useState(localStorage.inProgress?JSON.parse(localStorage.inProgress):[]);
  const [completed, setCompleted] = useState(localStorage.completed?JSON.parse(localStorage.completed):[]);

  const onAddToDos = () => {
    const toDo = {
      id: uuid(),
      title: 'Add Title',
      description: 'Add Description',
      deadline: Date.now(),
      complexity: 'hard',
      report: 'None',
      assignee: 'None'
    }
    setToDos(toDo, ...toDos);
  };

  const onDeleteToDo = (toDoId) => {
    setToDos(toDos.filter((toDo) => toDo.id!==toDoId) )
  }

  const onUpdateToDo = (updateToDo) => {
    
  }

  return (
    <div className="App">
      {/* <ToDo 
        toDos = {toDos}
        onAddToDos = {onAddToDos}

      /> */}
      <Main />
    </div>
  );
}

export default App;
