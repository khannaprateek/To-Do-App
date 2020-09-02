import React from 'react';
import './AddTask.css'


const AddTask = ({addInput,onAdd,text}) => {
    return (
        <div className = 'input'>
            <input className = 'inputbox ' type = 'text' onChange = {addInput} value = {text} placeholder='Something you want to do...'/>
            <button className = 'btn-add' onClick = {onAdd}>Add Task</button>
        </div>
    )
}

export default AddTask;