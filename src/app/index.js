import React from 'react'
import './index.css'
import EntryPage from './screens/EntryPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './screens/HomePage'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/auth' component={EntryPage} />
        </Switch>
      </Router>
    </div>
  )
}
