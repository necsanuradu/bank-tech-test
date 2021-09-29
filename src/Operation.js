class Operation {
  constructor(type, amount) {
    this.date = getDate();
    this.credit = type === "credit" ? amount : 0;
    this.debit = type === "debit" ? amount : 0;
  }

  insertBalance(balance, validator) {
    balance = validator.validate(balance);
    this.balance = balance;
  }

  static objectifyOperations(operations, validator) {
    return operations.map((operation) => {
      let type = validator.validateOperation(operation);
      return new Operation(type, operation[type]);
    });
  }
}
