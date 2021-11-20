import React from 'react'
import './styles/App.css'
import LoginPage from './screens/LoginPage/index.jsx'

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <LoginPage />
        </header>
      </div>
    )
  }
}
