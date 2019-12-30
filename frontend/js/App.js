import { MyComponent } from './AppBar';
import React from 'react';
import { hot } from 'react-hot-loader';

function App() {
  return <MyComponent />;
}

export default hot(module)(App);
