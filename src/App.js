import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Route } from 'react-router-dom';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Navigation from './components/Navigation';
import './App.scss';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Row className="row">
          <Col xs={12}>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
