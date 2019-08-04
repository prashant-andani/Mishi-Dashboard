import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  loadOnlineRestaurants,
  loadTableBookingRestaurants,
  loadRestaurantsByRating,
  loadRestaurantsByCity
} from '../actions';

import LineChart from './../components/LineChart';
const mapStateToProps = state => {
  return {
    onlineRestaurants: state.onlineRestaurants,
    tableBookingRestaurants: state.tableBookingRestaurants,
    restaurantsByRating: state.restaurantsByRating,
    restaurantsByCity: state.restaurantsByCity
  };
};

class Dashboard extends Component {
  componentWillMount() {
    this.props.dispatch(loadOnlineRestaurants());
    this.props.dispatch(loadTableBookingRestaurants());
    this.props.dispatch(loadRestaurantsByRating());
    this.props.dispatch(loadRestaurantsByCity());
  }
  render() {
    console.log(this.props.restaurantsByCity);
    return (
      <Row className="row">
        <Col md={4}>
          {' '}
          <Card>
            <Card.Header as="h5">
              No. of Restaurants Delivering Online or not
            </Card.Header>
            <Card.Body>
              <LineChart type="vertical" data={this.props.onlineRestaurants} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header as="h5">
              Restaurants providing table booking facility
            </Card.Header>
            <Card.Body>
              <LineChart
                type="vertical"
                data={this.props.tableBookingRestaurants}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header as="h5">Restaurants by Ratings</Card.Header>
            <Card.Body>
              <LineChart
                type="vertical"
                data={this.props.restaurantsByRating}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header as="h5">Restaurants by City</Card.Header>
            <Card.Body>
              <LineChart type="vertical" data={this.props.restaurantsByCity} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
