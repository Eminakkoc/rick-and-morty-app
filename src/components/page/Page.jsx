import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
  const { children } = props;

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="page-logo" />
      </div>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;