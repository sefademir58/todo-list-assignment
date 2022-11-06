import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (todo, startIndex, endIndex) => {
  const result = Array.from(todo)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'test', info: 'deneme' },
    { id: 2, text: 'tdasst', info: 'as' },
  ])

  useEffect(() => {
    // istek atılan yer düzenlenecek
    // fetch('https://localhost/api/todo/get')
    //   .then(todo => {
    //     if (todo && todo.length > 0) {
    //       todo.map(res => {
    //         setTodos([...todos, res])
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo getirilemedi')
    //   })
  }, [])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    // fetch('https://localhost/api/todo/add')
    //   .then(todo => {
    //     if (todo && todo.length > 0) {
    //       todo.map(res => {
    //         setTodos([...todos, res])
    //       })
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo eklenemedi')
    //   })
  }

  const updateTodo = (todoId, newTitleValue, newInfoValue) => {
    if (!newTitleValue.text || /^\s*$/.test(newTitleValue.text) || !newInfoValue.text || /^\s*$/.test(newInfoValue.text)) {
      return
    }

    // fetch(`https://localhost/api/todo/${todoId}`)
    //   .then(todo => {
    //     if (todo) {
    //       setTodos(prev => prev.map(item => (item.id === todoId ? newTitleValue : item)))
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo güncellenemedi')
    //   })
  }
  const removeTodo = id => {
    // fetch(`https://localhost/api/todo/5ddcd1566b55da0017597239`)
    //   .then(todo => {
    //     if (todo) {
    //       const removeArr = [...todos].filter(todo => todo.id !== id)
    //       setTodos(removeArr)
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo güncellenemedi')
    //   })
  }

  const completeTodo = todoId => {
    // fetch(`https:/localhost/api/todo/${todoId}?completed=true`).then(todoCompleted => {
    //   if (todoCompleted) {
    //     let updatedTodos = todos.map(todo => {
    //       if (todo.todoId === todoId) {
    //         todo.isComplete = !todo.isComplete
    //       }
    //       return todo
    //     })
    //     setTodos(updatedTodos)
    //   }
    // })
  }
  const onDragEnd = result => {
    if (!result.destination) {
      return
    }
    const items = reorder(todos, result.source.index, result.destination.index)
    setTodos(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable'>
        {provided => (
          <div ref={provided.innerRef}>
            <div className='todo-header'>
              <h1>Yapılacaklar Listesi</h1>
              <TodoForm onSubmit={addTodo} />
            </div>
            {todos.map((todo, index) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                index={index}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
