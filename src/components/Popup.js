import React, { useRef, useState, useEffect } from 'react'

const Popup = props => {
  const [input, setInput] = useState('')
  const [infoInput, setInfoInput] = useState('')
  const { setPopup } = props

  const inputRef = useRef(null)
  const infoinputRef = useRef(null)

  const serviceURL = 'https://localhost:8000/api/'

  useEffect(() => {
    inputRef.current.focus()

    if (props.edit) {
      setInput(props.edit.titleValue)
      setInfoInput(props.edit.infoValue)
    }
  }, [])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const addTodo = todo => {
    var title = inputRef.current.value
    var info = infoinputRef.current.value

    if (!title || /^\s*$/.test(title) || !info || /^\s*$/.test(info)) {
      return
    }

    fetch(`${serviceURL}add`)
      .then(todo => {
        if (todo && todo.length > 0) {
          setPopup(false)
        }
      })
      .catch(err => {
        console.log(err, 'Todo eklenemedi')
      })
  }

  const updateTodo = () => {
    var title = inputRef.current.value
    var info = infoinputRef.current.value
    if (!title || /^\s*$/.test(title) || !info || /^\s*$/.test(info)) {
      return
    }

    fetch(`${serviceURL}edit/${props.edit.id}`)
      .then(todo => {
        if (todo) {
          setPopup(false)
        }
      })
      .catch(err => {
        console.log(err, 'Todo güncellenemedi')
      })
  }

  const handleInfoChange = e => {
    setInfoInput(e.target.value)
  }

  return (
    <div className='popup'>
      <div className='popup-container'>
        <div className='popup-header'>
          <span>{props.edit ? 'TODO Güncelleme' : 'TODO Ekle'}</span>
          <button className='close-popup' onClick={() => setPopup(false)}>
            X
          </button>
        </div>
        <div className='popup-content'>
          <div className='popup-content-title'>
            <span>Başlık</span>
            <input
              type='text'
              className='todo-input'
              placeholder='Başlık'
              defaultValue={input}
              name='text'
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <div className='popup-content-info'>
            <span>İçerik</span>
            <textarea
              type='text'
              placeholder='İçerik'
              defaultValue={infoInput}
              onChange={handleInfoChange}
              name='text'
              ref={infoinputRef}
              className='info-textarea'
            />
          </div>
        </div>
        <div className='popup-footer'>
          {props.edit ? <button onClick={updateTodo}>Güncelle</button> : <button onClick={addTodo}>Kaydet</button>}
        </div>
      </div>
    </div>
  )
}

export default Popup
