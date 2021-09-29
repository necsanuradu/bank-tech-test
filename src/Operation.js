class Operation {
  constructor(type, amount) {
    this.date = getDate();
    this.credit = type === "credit" ? amount : 0;
    this.debit = type === "debit" ? amount : 0;
    valid(this.credit + this.debit);
  }

  insertBalance(balance) {
    balance = validate(balance);
    this.balance = balance;
  }

  static objectifyOperations(operations) {
    return operations.map((operation) => {
      let type = this.validateOperation(operation);
      return new Operation(type, operation[type]);
    });
  }

  static validateOperation(operation) {
    let checkArray = [operation.debit, operation.credit];
    if (Math.min(...checkArray) === 0 && Math.max(...checkArray) !== 0)
      return operation.debit === 0 ? "credit" : "debit";
    else throw "Invalid operation, history";
  }
}
