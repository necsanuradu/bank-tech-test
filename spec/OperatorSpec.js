describe("AccountOperator class", () => {
  describe("Testing on an empty account", () => {
    let emptyOperator, statementExample;
    let dateNow = getDate();
    beforeEach(() => {
      statementExample = getStatementExample(dateNow);
      emptyOperator = new AccountOperator();
    });

    it("should return 0 for an empty Account with no transaction history", () => {
      expect(emptyOperator.balance).toEqual(0);
    });

    it("should return 50 for an empty Account with no transaction history", () => {
      emptyOperator.creditAccount(50);
      expect(emptyOperator.balance).toEqual(50);
    });

    it("should return 25 for an empty Account with no transaction history", () => {
      emptyOperator.creditAccount(50);
      emptyOperator.debitAccount(25);
      expect(emptyOperator.balance).toEqual(25);
    });

    it("should return No transactions for an empty Account with no transaction history", () => {
      expect(emptyOperator.statement).toEqual("No transactions. Balance: £0");
    });

    it("should return the statement in the format set in the exmapleStatement", () => {
      emptyOperator.creditAccount(1000);
      emptyOperator.creditAccount(2000);
      emptyOperator.debitAccount(500);
      expect(emptyOperator.statement).toEqual(statementExample);
    });
  });

  describe("Testing on an account with preexisting transactions", () => {
    let operator;
    let dateNow = getDate();
    beforeEach(() => {
      operator250 = new AccountOperator([
        { date: dateNow, credit: 250, debit: 0 },
      ]);
      operator125 = new AccountOperator([
        { date: dateNow, credit: 250, debit: 0 },
        { date: dateNow, credit: 0, debit: 150 },
      ]);
      operator3000 = new AccountOperator([
        { date: dateNow, credit: 3000, debit: 0 },
      ]);
    });

    it("should return 250 for an Account with 250", () => {
      expect(operator250.balance).toEqual(250);
    });

    it("should return 100 for an Account with 100", () => {
      expect(operator125.balance).toEqual(100);
    });

    it("should return 50 for an Account with 100, debited 50", () => {
      operator125.debitAccount(50);
      expect(operator125.balance).toEqual(50);
    });

    it("should return 75 for an Account with 100, debited 50, credited 25", () => {
      operator125.debitAccount(50);
      operator125.creditAccount(25);
      expect(operator125.balance).toEqual(75);
    });
  });

  describe("Testing edge cases on live interaction", () => {
    beforeEach(() => {
      emptyOperator = new AccountOperator();
    });

    it("should throw Error if we try to debit 100 on a balance of 50", () => {
      emptyOperator.creditAccount(50);
      expect(function () {
        emptyOperator.debitAccount(100);
      }).toThrow("Not enough balance");
    });

    it("should throw Error if we try to credit a negative number -50", () => {
      expect(function () {
        emptyOperator.creditAccount(-50);
      }).toThrow("Negative value");
    });

    it("should throw Error if we try to debit a negative number -50", () => {
      expect(function () {
        emptyOperator.debitAccount(-50);
      }).toThrow("Negative value");
    });

    it("should throw Error if we try to credit a non-number (abc)", () => {
      expect(function () {
        emptyOperator.creditAccount("abc");
      }).toThrow("Invalid amount");
    });

    it("should throw Error if we try to debit a negative number (abc)", () => {
      expect(function () {
        emptyOperator.debitAccount("abc");
      }).toThrow("Invalid amount");
    });

    it("should throw Error if we try to credit a 0 amount", () => {
      expect(function () {
        emptyOperator.creditAccount(0);
      }).toThrow("Null amount");
    });

    it("should throw Error if we try to debit a 0 amount", () => {
      expect(function () {
        emptyOperator.debitAccount(0);
      }).toThrow("Null amount");
    });
  });
});
