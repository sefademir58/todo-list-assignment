import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function Start() {
  const history = useHistory()
  useEffect(() => {
    if (window.location.hash === '#/') {
      history.push('/login')
    }
  }, [])

  return null
}
