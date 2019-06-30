import React from 'react';
import PropTypes from 'prop-types';

import { LanguageConsumer } from 'common/language/LanguageContext';
import languages from 'common/language/languages';

const Page = (props) => {
  const { children, backTransition } = props;

  return (
    <LanguageConsumer>
      {({ language }) => (
        <div className="page-container">
          <div className="page-header">
            <div className="page-logo" />
          </div>
          {
            backTransition ? (
              <button
                type="button"
                className="page-back-button"
                onClick={backTransition}
              >
                {`< ${languages[language].back_button}`}
              </button>
            ) : null
          }
          {children}
        </div>
      )}
    </LanguageConsumer>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  backTransition: PropTypes.func,
};

Page.defaultProps = {
  children: null,
  backTransition: null,
};

export default Page;
