import PropTypes from 'prop-types';
import React from 'react';

function QRCode({ svgBinary }) {
  return <div>{svgBinary}</div>;
}

QRCode.propTypes = {
  svgBinary: PropTypes.object.isRequired,
};

export default QRCode;
