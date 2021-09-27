"use strict";
class Operator {
  #history;
  #ballance;
  #accountView;
  constructor(history = []) {
    this.#history = this.#validateHistory(history);
  }

  #runOperationns() {
    this.#ballance = 0;
    this.#accountView = [];
    this.#history.forEach((transaction) => {
      this.#execute(transaction);
    });
  }

  getBallance() {
    this.#runOperationns();
    return this.#ballance;
  }

  getStatement() {
    this.#runOperationns();
    return this.#accountView.length > 0
      ? this.#accountView
      : "No transactions.";
  }

  #validateHistory(operationnsList) {
    return operationnsList;
  }

  #execute(transaction) {
    this.#ballance += 250;
  }
  //   set operators(operationnList){
  //    this._operators = JSON.parse(operationnList).filter((operation) => {
  //      return true;
  //    });
  //   }
}
