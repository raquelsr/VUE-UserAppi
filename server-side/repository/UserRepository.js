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

  getAll() {
    console.log('UserRepository ---- getAll');
    return this.users;
  }

  async create(user) {
    console.log('UserRepository ---- Create');
    console.log(user);
    this.users.push(user);
  }
}

module.exports = new UserRepository();