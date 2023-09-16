import { testRequest } from '../constants/APIConfig';
import { requestAPI } from '../lib/api';

export const getDummyEmployee = (payload = null) => {
  return requestAPI({
    url: `${testRequest}`,
  });
};
