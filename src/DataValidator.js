class DataValidator {
  validateHistory(transactions) {
    transactions.forEach((transaction) => {
      if (!transaction.hasOwnProperty("date")) throw "Missing date, history";
      if (isNaN(transaction.credit)) throw "Invalid credit history";
      if (isNaN(transaction.debit)) throw "Invalid debit history";
      this.isValid(transaction.debit + transaction.credit);
    });
  }

  isValid(amount) {
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

  validateTransaction(transaction) {
    let checkArray = [transaction.debit, transaction.credit];
    if (Math.min(...checkArray) === 0 && Math.max(...checkArray) !== 0)
      return transaction.debit === 0 ? "credit" : "debit";
    else throw "Invalid operation, history";
  }
}
