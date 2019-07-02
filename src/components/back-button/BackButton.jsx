import React from 'react';
import PropTypes from 'prop-types';

const BackButton = (props) => {
  const { children, callBack } = props;

  return (
    <button
      type="button"
      className="back-button"
      onClick={callBack}
    >
      {children}
    </button>
  );
};

BackButton.propTypes = {
  callBack: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackButton;
