class AddressBuilder {
  setStreet(street) {
    this.street = street;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setPostalCode(postalCode) {
    this.postalCode = postalCode;
    return this;
  }
}

export default AddressBuilder;
