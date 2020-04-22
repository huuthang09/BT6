import {GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_WOMAN_FAIL, GET_DATA_WOMAN_REQUEST, GET_DATA_WOMAN_SUCCESS} from "../actions/PopularActions";

const initialState = {fetching: false, data: null, err: null};

export const getPopular = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_DATA_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_DATA_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};

//Woman

export const getWoman = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_WOMAN_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_DATA_WOMAN_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_DATA_WOMAN_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};