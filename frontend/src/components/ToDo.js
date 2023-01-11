import React from 'react'

/**
 * Created_by: Brian Nyaberi
 * Created_date: 11-Jan-2023
 * About: Frontend react ToDo app
 * Last Modified_by: 
 */

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className='icons'>
            <BiEdit className="icon" onclick={updateMode}/>
            <AiFillDelete className="icon" onclick={deleteToDo}/>
        </div>
    </div>
  )
}

export default ToDo