import axios from 'axios';

export const HOME_ROUTE = '/';
export const ERROR_ROUTE = '/error';

export const BACKEND_URL = 'http://localhost:8000/';

export const GET_EVENTS_DATA = {
  method: 'GET',
  url: 'api/events'
};
export const GET_EVENT_BY_ID = (Id) => ({
  method: 'GET',
  url: `api/events/${Id}`
});

export const GET_THEMES_DATA = {
  method: 'GET',
  url: 'api/themes'
};
export const makeRequest = async (apiEndpoint, dynamicConfig = {}, navigate) => {
  try {
    const config = {
      baseURL: BACKEND_URL,
      url: apiEndpoint.url,
      method: apiEndpoint.method,
      // headers: {
      //   Authorization: 'Bearer QWlzaHdhcnlhIE4='
      // },
      ...dynamicConfig
    };
    const data = (await axios(config)).data;
    return data;
  }
  catch (error) {
    console.log(error);
    if (navigate) {
      const errorStatus = error.response?.status;
      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
        console.log(error);
      }
      else {
        navigate(`${ERROR_ROUTE}`);
        console.log(error);
      }
    }
  }
};