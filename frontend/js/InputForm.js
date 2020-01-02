import Button from '@material-ui/core/Button';
import DjangoCSRFToken from 'django-react-csrftoken';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
  textfield: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));

export default function QRCodeForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form autoComplete="off" className={classes.root} method="post" noValidate>
        <DjangoCSRFToken />
        <FormControl>
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />
          <TextField
            className={classes.textfield}
            id="outlined-basic"
            label="Batch Number"
            variant="outlined"
          />
          {/* <MyKeyboardDatePicker /> */}
          <div className={classes.button}>
            <Button color="primary" type="submit" variant="contained">
              Generate QR Code
            </Button>
          </div>
        </FormControl>
      </form>
    </div>
  );
}
