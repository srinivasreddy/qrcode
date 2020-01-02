import React from 'react';

export class QRCodeSVG extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSource: [],
    };
  }

  componentDidMount() {
    return null;
  }

  render() {
    const { imageSource } = this.state;
    if (!imageSource.length) return null;

    return <img alt="QRCodeSVG" className="images" src="asdasd" />;
  }
}
