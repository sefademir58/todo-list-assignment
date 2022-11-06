import React, { useRef, useState } from 'react'
import Globals from '../globals'

export default function Login(props) {
  const [registerOpen, setRegisterOpen] = useState(false)

  const userNameRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)
  const surnameRef = useRef(null)

  const login = () => {
    const user = userNameRef.current.value
    const pass = passwordRef.current.value

    if ((!user, !pass)) return

    let data = {
      username: user,
      password: pass,
    }

    // fetch(`https://localhost:8000/api/login`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: { 'Content-type': 'application/json;' },
    // })
    //   .then(login => {
    //     if (login === false) return
    props.history.push('/todolist')
    // Globals.userId(login.userId)
    Globals.userId('1')

    user = ''
    pass = ''
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo getirilemedi')
    //   })
  }

  const register = () => {
    if ((!userNameRef.current.value, !passwordRef.current.value, !nameRef.current.value, !surnameRef.current.value)) return

    const user = userNameRef.current.value
    const pass = passwordRef.current.value
    const name = nameRef.current.value
    const surname = surnameRef.current.value

    if ((!user, !pass, !name, !surname)) return

    let data = {
      username: user,
      password: pass,
      name: name,
      surname: surname,
    }

    // fetch(`https://localhost:8000/api/register`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: { 'Content-type': 'application/json;' },
    // })
    //   .then(login => {
    //     if (login === false) return
    props.history.push('/todolist')
    // Globals.userId(login.userId)
    Globals.userId('1')

    user = ''
    pass = ''
    name = ''
    surname = ''
    //   })
    //   .catch(err => {
    //     console.log(err, 'Todo getirilemedi')
    //   })
    setRegisterOpen(false)
  }

  return (
    <div className='login-screen'>
      {registerOpen === false ? (
        <div className='login-container'>
          <div className='login-content'>
            <div className='login-content-title'>
              <span>Kullanıcı Adı</span>
              <input type='text' className='login-input' placeholder='Kullanıcı Adı' name='text' ref={userNameRef} />
            </div>
            <div className='login-content-title'>
              <span>Şifre</span>
              <input type='password' className='login-input' placeholder='Şifre' name='text' ref={passwordRef} />
            </div>
            <div className='login-footer'>
              <button onClick={login}> Giriş</button>
            </div>
          </div>
          <div className='login-register'>
            Hesabınız yokmu? <span onClick={() => setRegisterOpen(true)}>Kaydol</span>
          </div>
        </div>
      ) : (
        <div className='login-container'>
          <div className='login-content'>
            <div className='login-content-title'>
              <span>Ad</span>
              <input type='text' className='login-input' placeholder='Ad' name='text' ref={nameRef} />
            </div>
            <div className='login-content-title'>
              <span>Soyad</span>
              <input type='text' className='login-input' placeholder='Soyad' name='text' ref={surnameRef} />
            </div>
            <div className='login-content-title'>
              <span>Kullanıcı Adı</span>
              <input type='text' className='login-input' placeholder='Kullanıcı Adı' name='text' ref={userNameRef} />
            </div>
            <div className='login-content-title'>
              <span>Şifre</span>
              <input type='password' className='login-input' placeholder='Şifre' name='text' ref={passwordRef} />
            </div>
            <div className='login-footer'>
              <button onClick={() => setRegisterOpen(false)}>Vazgeç</button>
              <button onClick={register}> Kaydol</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
