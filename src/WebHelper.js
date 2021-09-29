let getDate = () => {
  let d = new Date();
  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
};

let createStatementView = (transactionsList, separator = " || ") => {
  let header = [Object.keys(transactionsList[0]).join(separator)];
  transactionsList = transactionsList.reverse().map((transaction) => {
    return Object.values(transaction).join(separator);
  });
  return header.concat(transactionsList).join("\n").replace(/ 0 /g, " ");
};
