import Button from '@material-ui/core/Button';
import React from 'react';
import { hot } from 'react-hot-loader';

function App() {
  return (
    <Button color="primary" variant="contained">
      Hello World
    </Button>
  );
}

export default hot(module)(App);
