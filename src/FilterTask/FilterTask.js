import React from 'react';
import './FilterTask.css'

const filterTask = ({filterInput}) => {
    return(
        <div className = 'filter'>
           <h2>Filter your tasks </h2>
          <input className = 'filter-input' onChange = {filterInput} placeholder = 'Filter the tasks'/>
        </div>
    )
}

export default filterTask;