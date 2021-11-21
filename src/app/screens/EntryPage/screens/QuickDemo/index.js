import React from 'react'
import Grid from '@material-ui/core/Grid'
import PersonIcon from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  icon: {
    margin: 'auto',
    fontSize: 100,
  },
}))

export default function QuickDemo() {
  const classes = useStyles()

  return (
    <div>
      <Typography component='h1' variant='h5' gutterBottom>
        Demo Account
      </Typography>

      <Box p={2} mb={2}>
        <Grid justifyContent='center' container>
          <Grid container item xs={6} justifyContent='center' direction='column'>
            <IconButton disableRipple>
              <PersonIcon className={classes.icon} style={{ color: '#f46036' }} />
            </IconButton>
            <Typography variant='body1'>Admin</Typography>
          </Grid>

          <Grid container item xs={6} justifyContent='center' direction='column'>
            <IconButton disableRipple>
              <PersonIcon className={classes.icon} style={{ color: '#489fb5' }} />
            </IconButton>

            <Typography variant='body1'>Manager</Typography>
          </Grid>

          <Grid container item xs={6} justifyContent='center' direction='column'>
            <IconButton disableRipple>
              <PersonIcon className={classes.icon} style={{ color: '#9c0d38' }} />
            </IconButton>
            <Typography variant='body1'>Developer</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
