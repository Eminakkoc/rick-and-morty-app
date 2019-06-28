import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
    render() {
        return (
            <div className="page-container">
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    children: PropTypes.node,
};

Page.defaultProps = {
    children: null,
};

export default Page;
