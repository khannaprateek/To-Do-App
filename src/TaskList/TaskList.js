import React from 'react';
import Task from '../Task/Task'

const TaskList = ({tasks,editInput,onSave,onEdit, onDelete}) => {
    return(
        tasks.map((task) => 
            <Task task = {task}
            key = {task.id}
            editInput = {editInput} 
            onSave = {onSave}
            onEdit = {onEdit}
            onDelete = {onDelete} 
            />
        )
    )
}

export default TaskList;