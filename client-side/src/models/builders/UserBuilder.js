class UserBuilder {
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setBirthDate(birthDate) {
    this.birthDate = birthDate;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }
}

export default UserBuilder;
