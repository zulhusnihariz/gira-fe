import React from 'react'

export default class SideBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  setChangeState(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return <div></div>
  }
}