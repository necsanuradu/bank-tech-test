class DataValidator {
  validateHistory(operations) {
    operations.forEach((operation) => {
      if (!operation.hasOwnProperty("date")) throw "Missing date, history";
      if (isNaN(operation.credit)) throw "Invalid credit history";
      if (isNaN(operation.debit)) throw "Invalid debit history";
      this.valid(operation.debit + operation.credit);
    });
  }

  valid(amount) {
    if (isNaN(amount)) throw "Invalid amount";
    if (Number(amount) < 0) throw "Negative value";
    if (Number(amount) === 0) throw "Null amount";
    return Number(amount).toFixed(2);
  }

  validate(balance, value) {
    if (Number(balance) < 0) throw "Negative balance";
    if (value !== undefined && balance < value) throw "Not enough balance";
    return Number(balance).toFixed(2);
  }

  validateOperation(operation) {
    let checkArray = [operation.debit, operation.credit];
    if (Math.min(...checkArray) === 0 && Math.max(...checkArray) !== 0)
      return operation.debit === 0 ? "credit" : "debit";
    else throw "Invalid operation, history";
  }
}
