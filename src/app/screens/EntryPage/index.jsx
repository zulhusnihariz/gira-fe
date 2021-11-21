import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Login from './screens/Login'
import Register from './screens/Register'
import { Route, Switch, useLocation } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
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

  let link

  if (location.pathname.includes('login')) {
    link = (
      <Grid item>
        <Link component={RouterLink} to='/auth/register' variant='body2' color='secondary'>
          {"Don't have an account? Register"}
        </Link>
      </Grid>
    )
  } else {
    link = (
      <Grid item>
        <Link component={RouterLink} to='/auth/login' variant='body2' color='secondary'>
          {'Already have an account? Login'}
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
        </Switch>

        <Grid container direction='column'>
          <Grid item xs>
            <Link component={RouterLink} to={'/forgot-password'} variant='body2' color='secondary'>
              Forgot password?
            </Link>
          </Grid>

          {link}
          <Grid item xs={12}>
            <Link component={RouterLink} to='/quick-demo' variant='body2' color='secondary'>
              {'Try without creating an account! Quick Demo'}
            </Link>
          </Grid>
        </Grid>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
