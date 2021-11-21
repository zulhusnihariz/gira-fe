import React from 'react'
import ReactDOM from 'react-dom'
import MainLayout from './app/index.jsx'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#282C34',
    },
    secondary: {
      main: '#f0ebd8',
    },
    text: {
      primary: '#f0ebd8',
      secondary: '#f0ebd8',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <MainLayout />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
