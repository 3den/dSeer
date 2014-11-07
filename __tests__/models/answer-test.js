jest.dontMock('../../models/answer');

describe("Answer", function() {
  var Answer = require("../../models/answer");

  it("gazes an answer", function() {
    Answer.list.forEach(function(message, i) {
      assertGaze(i, message);
    });
  });

  function assertGaze(n, message) {
    Answer.random = function() { return n; }
    expect(Answer.gaze()).toBe(message);
  }
});
