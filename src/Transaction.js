class Transaction {
  constructor(type, amount, date = getDate()) {
    this.date = date;
    this.credit = type === "credit" ? amount : 0;
    this.debit = type === "debit" ? amount : 0;
  }

  insertBalance(balance, validator) {
    balance = validator.validate(balance);
    this.balance = balance;
  }

  static objectifyTransactions(transactions, validator) {
    return transactions.map((transaction) => {
      let type = validator.validateTransaction(transaction);
      return new Transaction(type, transaction[type], transaction.date);
    });
  }
}
