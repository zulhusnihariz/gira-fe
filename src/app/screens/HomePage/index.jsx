import React from 'react'
import Dashboard from './components/Dashboard'
export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setChangeState(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <div>
          {/* Dashboard components taken from MaterialUI Dashboard template */}
          <Dashboard />
        </div>
      </div>
    )
  }
}
