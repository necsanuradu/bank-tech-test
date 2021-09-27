describe("Operator class", () => {
  describe("#initial state of the account", () => {
    let emptyOperator;
    beforeEach(() => {
      emptyOperator = new Operator();
    });

    it("should return 0 for an empty Operator with no transaction history", () => {
      expect(emptyOperator.getBallance()).toEqual(0);
    });

    it("should return No transactions for an empty Operator with no transaction history", () => {
      expect(emptyOperator.getStatement()).toEqual("No transactions.");
    });
  });

  describe("# preexisting transactions on the account", () => {
    let operator;
    let timeNow = new Date();
    beforeEach(() => {
      operatorOnce = new Operator([{ time: timeNow.getTime(), value: 250 }]);
      operatorTwice = new Operator([
        { time: timeNow.getTime(), value: 250 },
        { time: timeNow.getTime(), value: -125 },
      ]);
    });

    it("should return 250 for an empty Operator with no transaction history", () => {
      expect(operatorOnce.getBallance()).toEqual(250);
    });

    it("should return 125 for an empty Operator with no transaction history", () => {
      expect(operatorTwice.getBallance()).toEqual(125);
    });
  });
});
