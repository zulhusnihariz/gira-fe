import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from './components/NavBar'
import MainView from './components/MainView'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}))

export default function HomePage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <MainView />
    </div>
  )
}
