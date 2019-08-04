import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = props => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
    </Navbar>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
