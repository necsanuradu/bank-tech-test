"use strict";
class Operator {
  #transactionsList;
  constructor(transactionList) {
    this.#transactionsList = transactionList;
  }

  #runTransactions() {
    let ballance = 0;
    let operations = "No transactions.";
    return [ballance, operations];
  }

  getBallance() {
    return this.#runTransactions()[0];
  }

  getStatement() {
    return this.#runTransactions()[1];
  }

  //   set operators(transactionList){
  //    this._operators = JSON.parse(transactionList).filter((operation) => {
  //      return true;
  //    });
  //   }
}
