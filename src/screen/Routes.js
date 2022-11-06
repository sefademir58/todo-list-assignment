import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { TodoList } from '../components'
import { Login, Archive, Start, NoPage } from './index'

export default function Routes() {
  return (
    <Router>
      <Route path='/' component={Start} />
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/login' component={Login} />
        <Route path='/todolist' component={TodoList} />
        <Route path='/archive' component={Archive} />
        <Route path='/404Page' component={NoPage} />

        <Redirect from='*' to='/404Page' />
      </Switch>
    </Router>
  )
}
