import React from 'react';
import PropTypes from 'prop-types';

const BackButton = (props) => {
  const { label, callBack } = props;

  return (
    <button
      type="button"
      className="back-button"
      onClick={callBack}
    >
      {label}
    </button>
  );
};

BackButton.propTypes = {
  callBack: PropTypes.func.isRequired,
  label: PropTypes.string,
};

BackButton.defaultProps = {
  label: '',
};

export default BackButton;
