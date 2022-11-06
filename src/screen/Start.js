import { useEffect } from 'react'

export default function Start(props) {
  useEffect(() => {
    if (window.location.hash === '#/') {
      props.history.push('/login')
    }
  }, [])

  return null
}
