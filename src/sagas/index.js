import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_ONLINE_RESTAURANTS,
  RENDER_ONLINE_RESTAURANTS,
  LOAD_TABLE_BOOKING_RESTAURANTS,
  RENDER_TABLE_BOOKING_RESTAURANTS,
  LOAD_RESTAURANTS_BY_RATING,
  RENDER_RESTAURANTS_BY_RATING,
  LOAD_RESTAURANTS_BY_CITY,
  RENDER_RESTAURANTS_BY_CITY
} from '../actions';

/**
 * Restaurants by online booking facility
 */
export function* fetchOnlineRestaurants() {
  const data = [{ x: 'Yes', y: 10 }, { x: 'No', y: 5 }];
  yield put({ type: RENDER_ONLINE_RESTAURANTS, toOnlineRestaurants: data });
}

export function* loadOnlineRestaurants() {
  yield takeEvery(LOAD_ONLINE_RESTAURANTS, fetchOnlineRestaurants);
}

/**
 * Restaurants by Table Booking facility
 */

export function* fetchTableBookingRestaurants() {
  const data = [{ x: 'Yes', y: 50 }, { x: 'No', y: 13 }];
  yield put({
    type: RENDER_TABLE_BOOKING_RESTAURANTS,
    toTableBookingRestaurants: data
  });
}

export function* loadTableBookingRestaurants() {
  yield takeEvery(LOAD_TABLE_BOOKING_RESTAURANTS, fetchTableBookingRestaurants);
}

/**
 * Restaurants by Raging
 */
export function* fetchRestaurantsByRating() {
  const data = [
    { x: 'Excellent', y: 2500 },
    { x: 'Good', y: 4500 },
    { x: 'Average', y: 675 },
    { x: 'Bad', y: 3001 }
  ];
  yield put({
    type: RENDER_RESTAURANTS_BY_RATING,
    toRestaurantsByRating: data
  });
}

export function* loadRestaurantsByRating() {
  yield takeEvery(LOAD_RESTAURANTS_BY_RATING, fetchRestaurantsByRating);
}

/**
 * Restaurants by City
 */
export function* fetchRestaurantsByCity() {
  const data = [
    { x: 'Bengaluru', y: 4532 },
    { x: 'Chennai', y: 4356 },
    { x: 'Mumbai', y: 6754 },
    { x: 'Mysore', y: 2345 },
    { x: 'Delhi', y: 6749 }
  ];
  yield put({
    type: RENDER_RESTAURANTS_BY_CITY,
    toRestaurantsByCity: data
  });
}

export function* loadRestaurantsByCity() {
  yield takeEvery(LOAD_RESTAURANTS_BY_CITY, fetchRestaurantsByCity);
}

export default function* rootSaga() {
  yield all([
    loadOnlineRestaurants(),
    loadTableBookingRestaurants(),
    loadRestaurantsByRating(),
    loadRestaurantsByCity()
  ]);
}
