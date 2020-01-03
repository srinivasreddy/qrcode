import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import DjangoCSRFToken from 'django-react-csrftoken';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import QRCode  from './QRCode';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

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
    this.handleBatchNumberChange = this.handleBatchNumberChange.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { productName, batchNumber } = this.state;
    const url = window.location.href;
    const resp = axios
      .post(url, { productName, batchNumber })
      .then((resp) => {
        const { svgBinary } = resp.data;
        this.setState({ svgBinary });
        return resp;
      })
      .catch((e) => {
        console.log(`error${e.toString()}`);
      });
    console.log(JSON.stringify(`${resp}`));
  }

  handleBatchNumberChange(e) {
    this.setState({ batchNumber: e.target.value });
  }

  handleProductNameChange(e) {
    this.setState({ productName: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { batchNumber, productName, svgBinary } = this.state;
    return (
      <div className={classes.root}>
        <form autoComplete="off" className={classes.root} method="post" noValidate>
          <DjangoCSRFToken />
          <FormControl>
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Product Name"
              name="productName"
              value={productName}
              variant="outlined"
              onChange={this.handleProductNameChange}
            />
            <TextField
              className={classes.textfield}
              id="outlined-basic"
              label="Batch Number"
              name="batchNumber"
              value={batchNumber}
              variant="outlined"
              onChange={this.handleBatchNumberChange}
            />
            <div className={classes.button}>
              <Button color="primary" type="submit" variant="contained" onClick={this.handleSubmit}>
                Generate QR Code
              </Button>
            </div>
            {svgBinary !== '' && <QRCode svgBinary={svgBinary} />}
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
