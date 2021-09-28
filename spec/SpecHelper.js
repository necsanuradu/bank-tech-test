beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying,
          };
        },
      };
    },
  });
});

getStatementExample = (date) => {
  let statementExample = [];
  statementExample[0] = "date || credit || debit || balance";
  statementExample[1] = `${date} || || 500.00 || 2500.00`;
  statementExample[2] = `${date} || 2000.00 || || 3000.00`;
  statementExample[3] = `${date} || 1000.00 || || 1000.00`;
  return statementExample.join("\n");
};
