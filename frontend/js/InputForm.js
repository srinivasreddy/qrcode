import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MyKeyboardDatePicker from "./DatePicker";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(30),
    },
  },
}));

export default function QRCodeForm() {
  const classes = useStyles();

  return (
    <form autoComplete="off" className={classes.root} noValidate>
      <FormControl>
        <TextField id="outlined-basic" label="Product Name" variant="outlined" />
        <TextField id="outlined-basic" label="Batch Number" variant="outlined" />
        {/* <MyKeyboardDatePicker /> */}
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('this is clicked');
          }}
        >
          Generate QR Code
        </Button>
      </FormControl>
    </form>
  );
}
