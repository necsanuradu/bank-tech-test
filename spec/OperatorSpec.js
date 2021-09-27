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
});
