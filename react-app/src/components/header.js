import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <span>{this.props.title}</span>
        <nav>{this.props.children}</nav>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Header;