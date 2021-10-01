"use strict";
class AccountOperator {
  #history;
  constructor(history = []) {
    this.validator = new DataValidator();
    this.validator.validateHistory(history);
    this.#history = Transaction.objectifyTransactions(history, this.validator);
  }

  creditAccount(amount) {
    amount = this.validator.isValid(amount);
    return this.#addTransaction("credit", amount);
  }

  debitAccount(amount) {
    amount = this.validator.isValid(amount);
    this.validator.validate(this.balance, amount);
    return this.#addTransaction("debit", amount);
  }

  #addTransaction(type, amount) {
    this.#history.push(new Transaction(type, amount));
    this.validator.validate(this.balance);
  }

  #runTransactions(balance) {
    this.#history.forEach((transaction, index) => {
      balance += Number(transaction.credit) - Number(transaction.debit);
      transaction.insertBalance(balance, this.validator);
    });
    return Number(balance);
  }

  get balance() {
    return this.#runTransactions(0);
  }

  get statement() {
    if (this.#history.length === 0) return "No transactions. Balance: £0";
    else return createStatementView(this.#history.slice());
  }
}
