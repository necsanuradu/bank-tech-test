let validateHistory = (operations) => {
  operations.forEach((operation) => {
    if (!operation.hasOwnProperty("date")) throw "Missing date history";
    if (!operation.hasOwnProperty("credit")) throw "Missing credit history";
    if (!operation.hasOwnProperty("debit")) throw "Missing debit history";
    if (isNaN(operation.credit)) throw "Invalid credit history";
    if (isNaN(operation.debit)) throw "Invalid debit history";
  });
  return operations;
};

let valid = (amount) => {
  if (isNaN(amount)) throw "Invalid amount";
  if (Number(amount) < 0) throw "Negative value";
  if (Number(amount) === 0) throw "Null amount";
  return Number(amount).toFixed(2);
};

let validate = (balance, value) => {
  if (Number(balance) < 0) throw "Negative balance";
  if (value !== undefined && balance < value) throw "Not enough balance";
  return Number(balance).toFixed(2);
};

let getDate = () => {
  let d = new Date();
  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
};

let createStatementView = (transactionsList) => {
  let separator = " || ";
  let header = [Object.keys(transactionsList[0]).join(separator)];
  transactionsList = transactionsList.reverse().map((transaction) => {
    return Object.values(transaction).join(separator);
  });
  let statement = header
    .concat(transactionsList)
    .join("\n")
    .replace(/ 0 /g, " ");
  console.log(statement);
  return statement;
};

//   set operators(operationnList){
//    this._operators = JSON.parse(operationnList).filter((operation) => {
//      return true;
//    });
//   }
