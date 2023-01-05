import React from 'react'

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