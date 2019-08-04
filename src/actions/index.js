export const LOAD_ONLINE_RESTAURANTS = 'LOAD_ONLINE_RESTAURANTS';
export const RENDER_ONLINE_RESTAURANTS = 'RENDER_ONLINE_RESTAURANTS';
export const LOAD_TABLE_BOOKING_RESTAURANTS = 'LOAD_TABLE_BOOKING_RESTAURANTS';
export const RENDER_TABLE_BOOKING_RESTAURANTS =
  'RENDER_TABLE_BOOKING_RESTAURANTS';
export const LOAD_RESTAURANTS_BY_RATING = 'LOAD_RESTAURANTS_BY_RATING';
export const RENDER_RESTAURANTS_BY_RATING = 'RENDER_RESTAURANTS_BY_RATING';

export const LOAD_RESTAURANTS_BY_CITY = 'LOAD_RESTAURANTS_BY_CITY';
export const RENDER_RESTAURANTS_BY_CITY = 'RENDER_RESTAURANTS_BY_CITY';

export function loadOnlineRestaurants() {
  return {
    type: LOAD_ONLINE_RESTAURANTS
  };
}

export function loadTableBookingRestaurants() {
  return {
    type: LOAD_TABLE_BOOKING_RESTAURANTS
  };
}

export function loadRestaurantsByRating() {
  return {
    type: LOAD_RESTAURANTS_BY_RATING
  };
}

export function loadRestaurantsByCity() {
  return {
    type: LOAD_RESTAURANTS_BY_CITY
  };
}
