import React, { useState, useEffect } from 'react'
import Popup from './Popup'

function TodoForm(props) {
  const [popup, setPopup] = useState(false)

  const addTodo = () => {
    setPopup(true)
  }

  useEffect(() => {
    setPopup(props.popup)
  }, [props])

  return (
    <div className='todo-form'>
        {props.edit ? null : (
            <button className='todo-button' onClick={addTodo}>
            {'Todo Ekle'}
            </button>
        )}

        {popup && <Popup setPopup={setPopup} {...props} />}
    </div>
  )
}

export default TodoForm