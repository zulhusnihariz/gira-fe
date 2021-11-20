import React from 'react'
import './index.css'
// import LoginPage from './screens/LoginPage/index.jsx'
import HomePage from './screens/HomePage/index.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <HomePage />
          {/* <LoginPage /> */}
        </header>
      </div>
    )
  }
}
