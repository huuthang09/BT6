import axios from "axios";

export const api = axios
  .get("https://5e926b7cbbff810016968e85.mockapi.io/popular")
  .then(function (response) {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

export const womanApi = axios
  .get("https://5e926b7cbbff810016968e85.mockapi.io/woman")
  .then(function (response) {
    return response.data;
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

export const getPopular = () => {
  return api;
};

export const getWoman = () => {
  return womanApi;
};
