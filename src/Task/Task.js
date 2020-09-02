import React from 'react';
import EditTask from '../EditTask/EditTask';
import DeleteTask from '../DeleteTask/DeleteTask';
import './Task.css'


const Task = ({task,editInput,onSave,onEdit,onDelete}) => {
    const renderTask = () => {
        if(task.selected === true){
            return (
                <div className = 'input'>
                    <input className = 'edit-input' type = 'text' onChange = {editInput} defaultValue = {task.text}/>
                    <button className = 'btn-save'onClick= {onSave}>Save</button>
                </div>
            )
        }
        else{
            return (
                <div className = 'task'>
                    <p className = 'task-txt'>{task.text}</p>
                    <EditTask onEdit = {onEdit} task = {task}/>
                    <DeleteTask onDelete = {onDelete} task = {task}/>
                </div>
            )
        }
    }
    return renderTask()
}

export default Task;