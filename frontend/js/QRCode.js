import PropTypes from 'prop-types';
import React from 'react';

function QRCode({ svgBinary }) {
  const temp = `data:image/svg+xml;base64,${decodeURIComponent(escape(svgBinary)).toString()}`;
  return (
    <div>
      <img alt="base64 svg element" src={temp} />
    </div>
  );
}

QRCode.propTypes = {
  svgBinary: PropTypes.object.isRequired,
};

export default QRCode;
