class UserRepository {

  constructor() {
    this.users = [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "email": "john.smith@example.com",
        "birthDate": "1980-01-23",
        "address": {
          "id": 1,
          "street": "Lindenstraße 89",
          "city": "Freiburg im Breisgau",
          "country": "DE",
          "postalCode": "42030"
        }
      },
      {
        "id": 2,
        "firstName": "Raquel",
        "lastName": "Serrano",
        "email": "raquelsr@example.com",
        "birthDate": "1777-12-01",
        "address": {
          "id": 1,
          "street": "Calle Falsa, 123",
          "city": "Malaga",
          "country": "ES",
          "postalCode": "77130"
        }
      },
      {
        "id": 3,
        "firstName": "Jorge",
        "lastName": "Sanchez",
        "email": "jorgesan@example.com",
        "birthDate": "1990-02-22",
        "address": {
          "id": 1,
          "street": "Gran Via, 42",
          "city": "Madrid",
          "country": "ES",
          "postalCode": "22732"
        }
      }
    ];
  }

  async getAll() {
    return this.users;
  }

  async getById(id) {
    return this.users.find(user => user.id === id);
  }

  async create(user) {
    this.users.push(user);
    return user;
  }

  async updateById(id, user) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return;
    }
    this.users[userIndex] = user;
    return this.users[userIndex];
  }

  async deleteById(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
    return userIndex;
  }
}

module.exports = new UserRepository();