"use strict";
class AccountOperator {
  #history;
  constructor(history = []) {
    this.#history = validateHistory(history);
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
    let operation = { date: getDate(), credit: 0, debit: 0 };
    operation[type] = amount;
    this.#history.push(operation);
    return `You have sucessfully ${type}ed your account with: £${amount}, Balance: £${validate(
      this.balance
    )}`;
  }

  #runOperations() {
    let balance = 0;
    this.#history.forEach((transaction, index) => {
      balance += Number(transaction.credit) - Number(transaction.debit);
      this.#history[index].balance = validate(balance);
    });
    return Number(balance);
  }

  get balance() {
    return this.#runOperations();
  }

  get statement() {
    if (this.#history.length === 0) return "No transactions. Balance: £0";
    else return createStatementView(this.#history);
  }
}
