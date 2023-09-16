import { registerUrl, testRequest } from '../constants/APIConfig';
import { postAPI, requestAPI } from '../lib/api';

export const getDummyEmployee = (payload = null) => {
  return requestAPI({
    url: `${testRequest}`,
  });
};

export const loginData = (queryObj) => {
  return postAPI({
    url: `${testRequest}`,
    data: queryObj,
  });
};

// patch update

export const registerNewAccount = (newAccount) => {
  postAPI({
    url: `${registerUrl}`,
    data: newAccount,
  });
};
