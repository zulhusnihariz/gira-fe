import React from 'react'
import SignIn from './components/SignIn'

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  setChangeState(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <SignIn />
      </div>
    )
  }
}
