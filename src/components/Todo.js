import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })
  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-container complete' : 'todo-container'} key={index}>
      <div className='todo-left-content'>
        <div className='content'>
          <input type='checkbox' />
          <div className='title' key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
        </div>
        <div className='info'>
          {todo.info
            ? todo?.info
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
        </div>
      </div>
      <div className='todo-right-content'>
        <div className='icons'>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
        </div>
      </div>
    </div>
  ))
}

export default Todo