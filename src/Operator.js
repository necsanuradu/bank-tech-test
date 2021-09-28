"use strict";
class AccountOperator {
  #history;
  constructor(history = []) {
    validateHistory(history);
    this.#history = history;
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
    let operation = this.#newOperationObject(type, amount);
    this.#history.push(operation);
    validate(this.balance);
    return `Sucessfully ${type}ed your account with the amount: £${amount}`;
  }

  #runOperations() {
    let balance = 0;
    this.#history.forEach((transaction, index) => {
      balance += Number(transaction.credit) - Number(transaction.debit);
      this.#history[index].balance = validate(balance);
    });
    return Number(balance);
  }

  #newOperationObject(type, amount) {
    let operation = { date: getDate(), credit: 0, debit: 0 };
    operation[type] = amount;
    valid(operation.credit + operation.debit);
    return operation;
  }

  get balance() {
    return this.#runOperations();
  }

  get statement() {
    if (this.#history.length === 0) return "No transactions. Balance: £0";
    else return createStatementView(this.#history);
  }
}
