import React, { Component } from 'react';
import './App.css';

import TaskList from './TaskList/TaskList'

import AddTask from './AddTask/AddTask'
import FilterTask from './FilterTask/FilterTask';






class App extends Component {
  state = {
    tasks:[],
    tasksCopy:[],
    inputText:'',
    editText:'',
    filterText:''
  }

  handleAddInput = (event) => {
    
    this.setState( {
      inputText: event.target.value
    })
  
  
  }
  handleEditInput = (event) => {
    if(event.target.value.length !== 0){
      this.setState( {
        editText: event.target.value
      })
    }
  
  }
  handleAddTask = (event) => {
    const tasks = [...this.state.tasks]
    if(this.state.inputText.length !==0){
      tasks.push({text :this.state.inputText, id: tasks.length+1})
      this.setState({
        tasks: tasks,
        tasksCopy:tasks,
        inputText:""})
    }
    else
    {
      alert('Enter something to add a Task!!!');
    }
    

  }
  handleSaveTask= (event) => {
    const selectedIndex = this.state.tasks.findIndex(
      element => element.selected === true  )
    const tasks = [...this.state.tasks]
    if(this.state.editText.length !==0){
      tasks[selectedIndex] = {...tasks[selectedIndex],text:this.state.editText,selected :false}
    }
    else{
      tasks[selectedIndex] = {...tasks[selectedIndex],selected :false}
    }
    this.setState({
      tasks: tasks,
      tasksCopy:tasks,
      editText:''
    })

  }

  handleEditTask = (selectedTask) => {
    
    const selectedIndex = this.state.tasks.findIndex(
      element => element.id === selectedTask.id )
    const tasks = [...this.state.tasks]
    tasks[selectedIndex] = {...selectedTask,selected :true}
    this.setState({tasks})
  }

  handleDeleteTask = (selectedTask) => {
    const tasks = this.state.tasks.filter(task => task.id !== selectedTask.id)
    this.setState({
      tasks: tasks,
      tasksCopy:tasks
    })

  }

  handleFilterInput= (event) => {
    console.log('inside filter')
    let filteredTasks = []
    if(event.target.value.length === 0){
      filteredTasks = [...this.state.tasksCopy]
    }
    else{
      filteredTasks = [...this.state.tasksCopy].filter(task => {
        return task.text.toLowerCase().startsWith(event.target.value)
      });

    }
    this.setState({
      tasks:filteredTasks

    })
  }


  render() {
    const {state,
      handleAddInput,
      handleEditInput,
      handleAddTask,
      handleSaveTask,
      handleEditTask,
      handleDeleteTask,
      handleFilterInput} = this;
    return (
      <div className="App">
        <h1>Your To-Do schedule</h1>
        <AddTask addInput = {handleAddInput} onAdd = {handleAddTask} text = {state.inputText}/>
        {state.tasksCopy.length > 0 &&
         <FilterTask filterInput = {handleFilterInput}/>
        
        }
        <TaskList tasks= {state.tasks}
          editInput = {handleEditInput}
          onAdd = {handleAddTask}
          onSave = {handleSaveTask}
          onEdit = {handleEditTask}
          onDelete = {handleDeleteTask}
        />
        
      </div>
    );
  }
}

export default App;