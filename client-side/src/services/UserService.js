import http from '../http-common';

class UserService {
  constructor() {
    this.ENDPOINT = '/users';
  }

  getAll() {
    return http.get(this.ENDPOINT);
  }

  getById(id) {
    return http.get(`${this.ENDPOINT}/${id}`);
  }

  delete(id) {
    return http.delete(`${this.ENDPOINT}/${id}`);
  }
}

export default new UserService();
