import React from 'react';
import PropTypes from 'prop-types';

import { LanguageConsumer } from 'common/language/LanguageContext';
import languages from 'common/language/languages';

import BackButton from 'components/back-button/BackButton';
import { DEFAULTS } from 'common/constants';

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
            backTransition && (
              <BackButton callBack={backTransition}>
                {`< ${languages[language || DEFAULTS.LANGAUAGE].back_button}`}
              </BackButton>
            )
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
