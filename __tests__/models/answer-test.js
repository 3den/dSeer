jest.dontMock('../../models/answer');
jest.dontMock('random-js');

describe('Answer', function() {
  var Answer = require('../../models/answer');

  it('gazes an answer', function() {
    Answer.list.forEach(function(message, i) {
      assertGaze(i, message);
    });
  });

  it('returns the correct type', function() {
    var i;

    Answer.random(10)
    for(i = 1; i < 11; i++) assertType(i, 'yes');
    for(i = 11; i < 16; i++) assertType(i, 'maybe');
    for(i = 16; i < 20; i++) assertType(i, 'no');
  });

  it('randomizes within range', function () {
      for(i = 1; i < 20; i++) assertRandom(i);
  });

  function assertRandom(max) {
    var random = Answer.random(max);
    expect(random).toBeGreaterThan(0);
    expect(random).toBeLessThan(max + 1);
  }
  function assertGaze(i, message) {
    var answer = Answer.create(i);
    expect(answer.message).toBe(message);
  }

  function assertType(i, type) {
    var answer = Answer.create(i);
    expect(answer.type).toBe(type);
  }
});
