"use strict";
class AccountOperator {
  #history;
  constructor(history = []) {
    this.validator = new DataValidator();
    this.validator.validateHistory(history);
    this.#history = Operation.objectifyOperations(history, this.validator);
  }

  creditAccount(amount) {
    amount = this.validator.valid(amount);
    return this.#addOperation("credit", amount);
  }

  debitAccount(amount) {
    amount = this.validator.valid(amount);
    this.validator.validate(this.balance, amount);
    return this.#addOperation("debit", amount);
  }

  #addOperation(type, amount) {
    this.#history.push(new Operation(type, amount));
    this.validator.validate(this.balance);
    return `Sucessfully ${type}ed your account with the amount: £${amount}`;
  }

  #runOperations(balance) {
    this.#history.forEach((operation, index) => {
      balance += Number(operation.credit) - Number(operation.debit);
      operation.insertBalance(balance, this.validator);
    });
    return Number(balance);
  }

  get balance() {
    return this.#runOperations(0);
  }

  get statement() {
    if (this.#history.length === 0) return "No transactions. Balance: £0";
    else return createStatementView(this.#history);
  }
}
