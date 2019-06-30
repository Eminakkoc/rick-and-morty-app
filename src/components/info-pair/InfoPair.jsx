import React from 'react';
import PropTypes from 'prop-types';

const InfoPair = (props) => {
  const { label, value } = props;

  return (
    <div className="info-pair-container">
      <div className="info-pair-key">
        { `${label}: ` }
      </div>
      <div className="info-pair-value">
        { value }
      </div>
    </div>
  );
};

InfoPair.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

InfoPair.defaultProps = {
  label: '*',
  value: '*',
};

export default InfoPair;
