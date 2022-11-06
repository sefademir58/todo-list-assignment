import React from 'react'
import { MdArchive, MdLogout } from 'react-icons/md'
import Globals from '../globals'

export default function Nav(props) {
  const logout = () => {
    props.history.push('/login')
    Globals.userId = null
  }

  const handleArchive = () => {
    props.history.push('/archive')
  }

  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <div>TODO LİST</div>
        <div className='navbar-icons'>
          <div style={{ cursor: 'pointer' }} title='Arşivlenmiş işler' onClick={handleArchive}>
            <MdArchive size={25} />
          </div>
          <div style={{ cursor: 'pointer' }} title='Oturumu Kapat' onClick={logout}>
            <MdLogout size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}
