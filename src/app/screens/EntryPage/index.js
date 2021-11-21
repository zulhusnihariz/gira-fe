import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Login from './screens/Login'
import Register from './screens/Register'
import QuickDemo from './screens/QuickDemo'
import { Route, Switch, useLocation, Link as RouterLink } from 'react-router-dom'

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
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#588b8b',
    borderRadius: '35px',
  },
}))

export default function EntryPage() {
  const classes = useStyles()
  const location = useLocation()

  let ForgotPasswordLink
  let RegisterLoginLink
  let DemoLink

  if (location.pathname.includes('login')) {
    ForgotPasswordLink = (
      <Grid item xs>
        <Link component={RouterLink} to={'/forgot-password'} variant='body2' color='secondary'>
          Forgot password?
        </Link>
      </Grid>
    )
    RegisterLoginLink = (
      <Grid item>
        <Link component={RouterLink} to='/auth/register' variant='body2' color='secondary'>
          {"Don't have an account? Register"}
        </Link>
      </Grid>
    )
  } else {
    ForgotPasswordLink = <Grid item></Grid>

    RegisterLoginLink = (
      <Grid item>
        <Link component={RouterLink} to='/auth/login' variant='body2' color='secondary'>
          {'Already have an account? Login'}
        </Link>
      </Grid>
    )
  }

  if (location.pathname.includes('demo')) {
    DemoLink = <Grid item></Grid>
  } else {
    DemoLink = (
      <Grid item xs={12}>
        <Link component={RouterLink} to='/auth/quick-demo' variant='body2' color='secondary'>
          {'Try without creating an account - Quick Demo'}
        </Link>
      </Grid>
    )
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Switch>
          <Route exact path='/auth/login' component={Login} />
          <Route exact path='/auth/register' component={Register} />
          <Route exact path='/auth/quick-demo' component={QuickDemo} />
        </Switch>

        <Grid container direction='column'>
          {ForgotPasswordLink}
          {RegisterLoginLink}
          {DemoLink}
        </Grid>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
