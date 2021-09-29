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

    it("should return No transactions for an empty Account", () => {
      expect(emptyOperator.statement).toEqual("No transactions. Balance: £0");
    });

    it("should return the statement formatted as in the exmapleStatement", () => {
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

    it("should return 75 for balance 100, debited 50, credited 25", () => {
      operator125.debitAccount(50);
      operator125.creditAccount(25);
      expect(operator125.balance).toEqual(75);
    });
  });

  describe("Edge cases on live interaction", () => {
    describe("should throw Error if we try to", () => {
      beforeEach(() => {
        emptyOperator = new AccountOperator();
      });

      it(" debitAccount 100 more then the balance of 50", () => {
        emptyOperator.creditAccount(50);
        expect(function () {
          emptyOperator.debitAccount(100);
        }).toThrow("Not enough balance");
      });

      it(" creditAccount a negative number -50", () => {
        expect(function () {
          emptyOperator.creditAccount(-50);
        }).toThrow("Negative value");
      });

      it(" debitAccount a negative number -50", () => {
        expect(function () {
          emptyOperator.debitAccount(-50);
        }).toThrow("Negative value");
      });

      it(" creditAccount using a non-number (abc)", () => {
        expect(function () {
          emptyOperator.creditAccount("abc");
        }).toThrow("Invalid amount");
      });

      it(" debitAccount using a non-number (abc)", () => {
        expect(function () {
          emptyOperator.debitAccount("abc");
        }).toThrow("Invalid amount");
      });

      it(" creditAccount using a 0-null value", () => {
        expect(function () {
          emptyOperator.creditAccount(0);
        }).toThrow("Null amount");
      });

      it(" debitAccount using a 0-null value", () => {
        expect(function () {
          emptyOperator.debitAccount(0);
        }).toThrow("Null amount");
      });
    });
  });

  describe("Edge cases on a preexisting account history", () => {
    describe("should throw Error if we instantiate account history", () => {
      beforeEach(() => {
        negativeOperator = new AccountOperator([
          { date: "21/10/2021", credit: 100, debit: 0 },
          { date: "21/10/2021", credit: 0, debit: 200 },
        ]);
      });

      it("operation without/missing date value", () => {
        expect(function () {
          new AccountOperator([{ credit: 250, debit: 0 }]);
        }).toThrow("Missing date, history");
      });

      it("operation without/missing credit value", () => {
        expect(function () {
          new AccountOperator([{ date: "21/10/2021", debit: 0 }]);
        }).toThrow("Invalid credit history");
      });

      it("operation without/missing debit value", () => {
        expect(function () {
          new AccountOperator([{ date: "21/10/2021", credit: 0 }]);
        }).toThrow("Invalid debit history");
      });

      it("operation with non-numeric debit value", () => {
        expect(function () {
          new AccountOperator([
            { date: "21/10/2021", credit: 0, debit: "abc" },
          ]);
        }).toThrow("Invalid debit history");
      });

      it("operation with non-numeric credit value", () => {
        expect(function () {
          new AccountOperator([
            { date: "21/10/2021", credit: "abc", debit: 0 },
          ]);
        }).toThrow("Invalid credit history");
      });

      it("operation with 0-null both credit and debit value", () => {
        expect(function () {
          new AccountOperator([{ date: "21/10/2021", credit: 0, debit: 0 }]);
        }).toThrow("Null amount");
      });

      it("operation with both credit and debit non-0 value", () => {
        expect(function () {
          new AccountOperator([{ date: "21/10/2021", credit: 20, debit: 10 }]);
        }).toThrow("Invalid operation, history");
      });

      it("operation with the balance negative value at any given time", () => {
        expect(function () {
          negativeOperator.balance;
        }).toThrow("Negative balance");
      });
    });
  });
});
