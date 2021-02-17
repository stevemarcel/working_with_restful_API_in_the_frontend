import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_PROFILES_FAIL,
  USER_PROFILES_REQUEST,
  USER_PROFILES_SUCCESS,
} from '../constants/userConstants';

export const userListReducer = (state = { usersRecord: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true, usersRecord: [] };
    case USER_LIST_SUCCESS:
      return { loading: false, usersRecord: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userProfilesReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_PROFILES_REQUEST:
      return { loading: true };
    case USER_PROFILES_SUCCESS:
      return { loading: false, profiles: action.payload };
    case USER_PROFILES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
