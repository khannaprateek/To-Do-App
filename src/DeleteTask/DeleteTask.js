import React from 'react';
import '../Task/Task.css'

const DeleteTask = ({task,onDelete}) => {
    
    return (
        <button className = 'btn-del' onClick = {() => onDelete(task)}>Delete</button>
    )
}

export default DeleteTask;