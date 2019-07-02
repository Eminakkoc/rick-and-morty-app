import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';

import { DEFAULTS } from 'common/constants';

const LanguageContext = createContext({
  language: '',
  updateLanguage: () => {},
});

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: DEFAULTS.LANGAUAGE,
      updateLanguage: this.updateLanguage,
    };
  }

  updateLanguage = (newLanguage) => {
    this.setState({ language: newLanguage });
  };

  render() {
    const { children } = this.props;
    const { language, updateLanguage } = this.state;

    return (
      <LanguageContext.Provider
        value={{
          language,
          updateLanguage,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};

LanguageProvider.defaultProps = {
  children: null,
};

export const LanguageConsumer = LanguageContext.Consumer;
