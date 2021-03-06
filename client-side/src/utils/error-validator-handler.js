class ErrorValidatorHandler {
  constructor() {
    this.errorList = [];
  }

  checkRequiredField(field, msg) {
    if (!field.$dirty) return this.errorList;
    if (!field.required) {
      this.errorList.push(`${msg} is required.`);
    }
    return this.errorList;
  }

  checkValidEmail(field) {
    if (!field.$dirty) return this.errorList;
    if (!field.email) {
      this.errorList.push('Must be valid email');
    }
    return this.errorList;
  }

  checkMaxLength(field) {
    if (!field.$dirty) return this.errorList;
    if (!field.maxLength) {
      this.errorList.push('Example: UK, ES, DE');
    }
    return this.errorList;
  }

  checkMinLength(field) {
    if (!field.$dirty) return this.errorList;
    if (!field.minLength) {
      this.errorList.push('Example: UK, ES, DE');
    }
    return this.errorList;
  }

  checkIsNumber(field) {
    if (!field.$dirty) return this.errorList;
    if (!field.numeric) {
      this.errorList.push('Must be numbers');
    }
    return this.errorList;
  }

  multipleValidations() {
    return this.errorList;
  }
}

export default ErrorValidatorHandler;
