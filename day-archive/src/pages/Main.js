import React from 'react';
import Main_illust from './Main_illust.svg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    alignContent: 'center'
  },
  paper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 1500
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    justifyContent: 'center'
  }
});

const Main = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={8}>
            <img className={classes.img} alt='complex' src={Main_illust} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={16}>
              <Grid item xs />
              <Grid item xs>
                <Typography component='h3' variant='h3'>
                  dayArchive
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom>당신의 하루를 기록하세요.</Typography>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
              </Grid>
              <Grid item>
                <p> 버튼자리</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withRoot(withStyles(styles)(Main));
