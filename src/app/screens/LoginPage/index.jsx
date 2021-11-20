import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class LoginPage extends Component {
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
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address {this.state.email}</Form.Label>
            <Form.Control
              name='email'
              type='email'
              placeholder='Enter email'
              onChange={event => this.setChangeState(event)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password {this.state.password}</Form.Label>

            <Form.Control
              name='password'
              type='password'
              placeholder='Password'
              onChange={event => this.setChangeState(event)}
            />
          </Form.Group>
          {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group> */}
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </div>
    )
  }
}
