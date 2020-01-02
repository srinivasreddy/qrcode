import Button from '@material-ui/core/Button';
import DjangoCSRFToken from 'django-react-csrftoken';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

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

export class QRCodeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      batchNumber: '',
      svgBinary: '',
      svgUrl: '',
      svgPdf: '',
      svgPrint: '',
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const url = window.location.href;
    const { productName, batchNumber } = this.state;
    const response =  (async () => {
      return await axios.post(url, { productName, batchNumber});
    });
    const { svgBinary, svgUrl, svgPdf, svgPrint } = response.data;
    this.setState({ svgBinary, svgPrint, svgUrl, svgPdf });
  }

  handleBatchNumberChange(e) {
    this.setState({ batchNumber: e.target.value });
  }

  handleProductNameChange(e) {
    this.setState({ productName: e.target.value });
  }

  render() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <form autoComplete="off" className={classes.root} noValidate >
          <DjangoCSRFToken />
          <FormControl onSubmit={handleOnSubmit}>
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              onChange={handleProductNameChange}
            />
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Batch Number"
              variant="outlined"
              onChange={handleBatchNumberChange}
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
}

QRCodeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(QRCodeForm);
