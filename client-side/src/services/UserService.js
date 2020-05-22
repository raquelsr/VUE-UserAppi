import http from '../http-common';

class UserService {
  constructor() {
    this.ENDPOINT = '/users';
  }

  getAll() {
    return http.get(this.ENDPOINT);
  }
}

export default new UserService();
