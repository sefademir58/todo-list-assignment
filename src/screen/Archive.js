import React from 'react'
import { TodoItem, Nav, TodoForm } from '../components'
import Globals from '../globals'

export default function Archive(props) {
  const serviceURL = 'https://localhost:8000/api/'

  const removeTodo = id => {
    fetch(`${serviceURL}delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(todo => {
        if (todo) {
          // const removeArr = [...todos].filter(todo => todo.id !== id)
          // setTodos(removeArr)
        }
      })
      .catch(err => {
        console.log(err, 'Todo silinemedi')
      })
  }

  return (
    <div>
      <div className='todo'>
        <Nav {...props} />
        <div className='todo-app'>
          <div className='todo-header'>
            <h1>ARŞİVLENMİŞ İŞLER</h1>
          </div>
          {/* {props.todos.map((todo, index) => (
            <TodoItem todo={todo} key={todo.id} index={index} />
          ))} */}
        </div>
      </div>
    </div>
  )
}
