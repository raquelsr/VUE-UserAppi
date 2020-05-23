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

  create(user) {
    return http.post(this.ENDPOINT, user);
  }

  edit(user) {
    console.log(user);
    return http.put(`${this.ENDPOINT}/${user.id}`, user);
  }

  delete(id) {
    return http.delete(`${this.ENDPOINT}/${id}`);
  }
}

export default new UserService();
