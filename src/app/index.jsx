import React from 'react'
import './index.css'
import EntryPage from './screens/EntryPage/index.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './screens/HomePage/index.jsx'

export default class MainLayout extends React.Component {
  render() {
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
}
