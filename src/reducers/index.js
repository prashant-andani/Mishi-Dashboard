import {
  RENDER_ONLINE_RESTAURANTS,
  RENDER_TABLE_BOOKING_RESTAURANTS,
  RENDER_RESTAURANTS_BY_RATING,
  RENDER_RESTAURANTS_BY_CITY
} from '../actions';

const initialState = {
  onlineRestaurants: [],
  tableBookingRestaurants: [],
  restaurantsByRating: [],
  restaurantsByCity: []
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case RENDER_ONLINE_RESTAURANTS:
      return {
        ...state,
        onlineRestaurants: action.toOnlineRestaurants
      };
    case RENDER_TABLE_BOOKING_RESTAURANTS:
      return {
        ...state,
        tableBookingRestaurants: action.toTableBookingRestaurants
      };
    case RENDER_RESTAURANTS_BY_RATING:
      return {
        ...state,
        restaurantsByRating: action.toRestaurantsByRating
      };
    case RENDER_RESTAURANTS_BY_CITY:
      return {
        ...state,
        restaurantsByCity: action.toRestaurantsByCity
      };
    default:
      return state;
  }
}
