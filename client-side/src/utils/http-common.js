import axios from 'axios';

export default axios.create({
  baseURL: 'https://user-appi-server.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
