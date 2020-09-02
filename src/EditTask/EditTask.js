import React from 'react';
import '../Task/Task.css'

const EditTask = ({task,onEdit}) => {
    
    return (
        <button className = 'btn-edit' onClick = {() => onEdit(task)}>Edit</button>
    )
}

export default EditTask;