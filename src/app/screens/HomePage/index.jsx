import React from 'react'
import SideBar from './components/SideBar.jsx'
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
          <SideBar />
        </div>
      </div>
    )
  }
}
