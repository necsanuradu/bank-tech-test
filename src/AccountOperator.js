"use strict";
class AccountOperator {
  #history;
  constructor(history = []) {
    validateHistory(history);
    this.#history = Operation.objectifyOperations(history);
  }

  creditAccount(amount) {
    amount = valid(amount);
    return this.#addOperation("credit", amount);
  }

  debitAccount(amount) {
    amount = valid(amount);
    validate(this.balance, amount);
    return this.#addOperation("debit", amount);
  }

  #addOperation(type, amount) {
    this.#history.push(new Operation(type, amount));
    validate(this.balance);
    return `Sucessfully ${type}ed your account with the amount: £${amount}`;
  }

  #runOperations(balance) {
    this.#history.forEach((operation, index) => {
      balance += Number(operation.credit) - Number(operation.debit);
      operation.insertBalance(balance);
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
