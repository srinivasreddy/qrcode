import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import QRCodeForm from './InputForm';

export function MyFooter() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div">
          <QRCodeForm />
        </Typography>
      </Container>
    </>
  );
}
