import axios from 'axios';
import cookie from 'cookie';

// optionaly add base url for axios
const client = axios.create({
  url: process.env.API_BASE_URL,
  headers: {
    // "x-api-key": process.env.API_KEY,
    'x-api-key': '12345',
  },
});

export const requestAPI = ({ ...options }) => {
  const cookies = cookie.parse(window?.document.cookie);

  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${cookies?.accessToken || ''}`;
  }

  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error;
  };

  return client({ method: 'get', ...options })
    .then(onSuccess)
    .catch(onError);
};

export const postAPI = ({ ...options }) => {
  const cookies = cookie.parse(window?.document.cookie);
  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${cookies?.accessToken || ''}`;
  }

  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionaly catch errors and add some additional logging here
    return error;
  };

  return client({ method: 'post', ...options })
    .then(onSuccess)
    .catch(onError);
};

export const patchAPI = ({ ...options }) => {
  const cookies = cookie.parse(window?.document.cookie);
  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${cookies?.accessToken || ''}`;
  }

  const onSuccessPath = (response) => response;
  const onErrorPath = (error) => {
    // optionaly catch errors and add some additional logging here
    return error;
  };

  return client({ method: 'patch', ...options })
    .then(onSuccessPath)
    .catch(onErrorPath);
};

export const deleteAPI = ({ ...options }) => {
  const cookies = cookie.parse(window?.document.cookie);
  if (cookies.accessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${cookies?.accessToken || ''}`;
  }

  const onSuccessDelete = (response) => response;
  const onErrorDelete = (error) => {
    // optionaly catch errors and add some additional logging here
    return error;
  };

  return client({ method: 'delete', ...options })
    .then(onSuccessDelete)
    .catch(onErrorDelete);
};
