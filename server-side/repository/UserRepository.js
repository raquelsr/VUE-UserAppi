class UserRepository {

  constructor() {
    this.users = [
      {
        "id": 1,
        "firstname": "John",
        "lastname": "Smith",
        "email": "john.smith@example.com",
        "birthDate": "1980-01-23",
        "address": {
          "id": 1,
          "street": "Lindenstraße 89",
          "city": "Freiburg im Breisgau",
          "country": "DE",
          "postalcode": "42030"
        }
      },
      {
        "id": 2,
        "firstname": "Raquel",
        "lastname": "Serrano",
        "email": "raquelsr@example.com",
        "birthDate": "1777-12-01",
        "address": {
          "id": 1,
          "street": "Calle Falsa, 123",
          "city": "Malaga",
          "country": "ES",
          "postalcode": "77130"
        }
      },
      {
        "id": 3,
        "firstname": "Jorge",
        "lastname": "Sanchez",
        "email": "jorgesan@example.com",
        "birthDate": "1990-02-22",
        "address": {
          "id": 1,
          "street": "Gran Via, 42",
          "city": "Madrid",
          "country": "ES",
          "postalcode": "22732"
        }
      }
    ];
  }

  async getAll() {
    console.log('UserRepository ---- getAll');
    return this.users;
  }

  async getById(id) {
    console.log('UserRepository ---- getById');
    return this.users.find(user => user.id === id);
  }

  async create(user) {
    console.log('UserRepository ---- create');
    this.users.push(user);
    return user;
  }

  async updateById(id, user) {
    console.log('UserRepository ---- updateById');
    const userIndex = this.users.findIndex(user => user.id === id);
    if (!userIndex) {
      return;
    }
    this.users[userIndex] = user;
    return this.users[userIndex];
  }
}

module.exports = new UserRepository();