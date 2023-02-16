import axios from 'axios';

const habituallyApi = axios.create({
  baseURL: process.env.REACT_APP_DEV_API_URL,
});

export { habituallyApi as default };
