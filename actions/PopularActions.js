export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';

export const getDataRequest = () => {
  return {type: GET_DATA_REQUEST};
};
export const getDataSuccess = data => {
  return {type: GET_DATA_SUCCESS, payload: {data}};
};
export const getDataFail = err => {
  return {type: GET_DATA_FAIL, payload: {err}};
};

//Woman
export const GET_DATA_WOMAN_REQUEST = 'GET_DATA_WOMAN_REQUEST';
export const GET_DATA_WOMAN_SUCCESS = 'GET_DATA_WOMAN_SUCCESS';
export const GET_DATA_WOMAN_FAIL = 'GET_DATA_WOMAN_FAIL';

export const getDataWomanRequest = () => {
  return {type: GET_DATA_WOMAN_REQUEST};
};
export const getDataWomanSuccess = data => {
  return {type: GET_DATA_WOMAN_SUCCESS, payload: {data}};
};
export const getDataWomanFail = err => {
  return {type: GET_DATA_WOMAN_FAIL, payload: {err}};
};