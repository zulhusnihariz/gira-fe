import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Dashboard from '../screens/Dashboard'
import Projects from '../screens/Projects'
import UserManagement from '../screens/UserManagement'
import Account from '../screens/Account'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Gira
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function MainView() {
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='xl' className={classes.container}>
        {/* Main display is in here (Dashboard, User Management, Projects, Account) */}
        <Dashboard />
        <UserManagement />
        <Projects />
        <Account />
      </Container>
      <Box pt={4}>
        <Copyright />
      </Box>
    </div>
  )
}
