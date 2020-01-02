import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DjangoCSRFToken from 'django-react-csrftoken';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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

class QRCodeForm extends React.Component {
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
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleBatchNumberChange = this.handleBatchNumberChange.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { productName, batchNumber } = this.state;
    const url = window.location.href;
    const response = axios
      .post(url, { productName, batchNumber })
      .then((resp) => {
        console.log(`Success${resp.toString()}`);
        return resp;
      })
      .catch((e) => {
        console.log(`error${e.toString()}`);
      });
    // const response = { svgBinary: 1, svgUrl: 2, svgPdf: 3, svgPrint: 4 };
    const { svgBinary, svgUrl, svgPdf, svgPrint } = response.data;
    this.setState({ svgBinary, svgPrint, svgUrl, svgPdf });
    // eslint-disable-next-line no-console
    console.dir(this.state, { depth: null, colors: true });
  }

  handleBatchNumberChange(e) {
    this.setState({ batchNumber: e.target.value });
  }

  handleProductNameChange(e) {
    this.setState({ productName: e.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form autoComplete="off" className={classes.root} noValidate>
          <DjangoCSRFToken />
          <FormControl>
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              onChange={this.handleProductNameChange}
            />
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Batch Number"
              variant="outlined"
              onChange={this.handleBatchNumberChange}
            />
            {/* <MyKeyboardDatePicker /> */}
            <div className={classes.button}>
              <Button
                color="primary"
                type="submit"
                variant="contained"
                onClick={this.handleOnSubmit}
              >
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
