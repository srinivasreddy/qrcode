/* eslint-disable import/order */
// eslint-disable-next-line import/order
import { MyAppBar } from './AppBar';
import { MySimpleContainer } from './SimpleContainer';
import React from 'react';
import { hot } from 'react-hot-loader';

function App() {
  return (
    <>
      <MyAppBar />
      <MySimpleContainer />
    </>
  );
}

export default hot(module)(App);
