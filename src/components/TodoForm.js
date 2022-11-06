import React, { useState } from 'react'
import Popup from './Popup'

function TodoForm() {
  const [popup, setPopup] = useState(false)

  const addTodo = () => {
    setPopup(true)
  }

  return (
    <div className='todo-form'>
      <button className='todo-button' onClick={addTodo}>
        {'Todo Ekle'}
      </button>

      {popup && <Popup setPopup={setPopup} />}
    </div>
  )
}

export default TodoForm