import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

const InfoPair = (props) => {
  const { label, value, className } = props;

  return (
    <div className={classnames('info-pair-container', className)}>
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

InfoPair.defaultProps = {
  label: '*',
  value: '*',
  className: '',
};

export default InfoPair;
