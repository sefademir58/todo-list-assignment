import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TodoForm, TodoItem, Nav } from '.'
import Globals from '../globals'

const reorder = (todo, startIndex, endIndex) => {
  const result = Array.from(todo)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function TodoList(props) {
  const [todos, setTodos] = useState([
    { id: 1, text: 'test', info: 'deneme' },
    { id: 2, text: 'tdasst', info: 'as' },
  ])

  const serviceURL = 'https://localhost:8000/api/'

  useEffect(() => {
    fetch(`${serviceURL}list`, {
      method: 'GET',
      body: JSON.stringify({ 'id': Globals.userId }),
    })
      .then(response => response.json())
      .then(todo => {
        if (todo && todo.length > 0) {
          todo.map(res => {
            setTodos([...todos, res])
          })
        }
      })
      .catch(err => {
        console.log(err, 'Todo getirilemedi')
      })
  }, [])

  useEffect(() => {
    console.log(props.history)
  }, [props])

  const removeTodo = id => {
    fetch(`${serviceURL}delete/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(todo => {
        if (todo) {
          const removeArr = [...todos].filter(todo => todo.id !== id)
          setTodos(removeArr)
        }
      })
      .catch(err => {
        console.log(err, 'Todo güncellenemedi')
      })
  }

  const completeTodo = (todoId, completed) => {
    fetch(`${serviceURL}${todoId}?completed=${completed}`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(todoCompleted => {
        if (todoCompleted) {
          let updatedTodos = todos.map(todo => {
            if (todo.todoId === todoId) {
              todo.isComplete = !todo.isComplete
            }
            return todo
          })
          setTodos(updatedTodos)
        }
      })
  }
  const onDragEnd = result => {
    if (!result.destination) {
      return
    }
    const items = reorder(todos, result.source.index, result.destination.index)
    setTodos(items)
  }

  return (
    <div className='todo'>
      <Nav {...props} />
      <div className='todo-app'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {provided => (
              <div ref={provided.innerRef}>
                <div className='todo-header'>
                  <h1>Yapılacaklar Listesi</h1>
                  <TodoForm />
                </div>
                {todos.map((todo, index) => (
                  <TodoItem todo={todo} key={todo.id} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default TodoList
