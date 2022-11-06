import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([{ id: Math.random(), text: 'test', info: 'deneme' }])

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

  return (
    <div>
      <div className='todo-header'>
        <h1>Yapılacaklar Listesi</h1>
        <TodoForm onSubmit={addTodo} />
      </div>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList