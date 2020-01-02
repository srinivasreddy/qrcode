import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import QRCodeForm from './InputForm';
import React from 'react';
import Typography from '@material-ui/core/Typography';

export function MySimpleContainer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div">
          <MuiThemeProvider>
            <QRCodeForm />
          </MuiThemeProvider>
        </Typography>
      </Container>
    </>
  );
}
