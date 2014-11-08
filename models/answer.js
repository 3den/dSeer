var Random = require("random-js");

var Answer = {
  list: [
    //Ask
    "Ask a question... tap for the answer",

    // Yes
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",

    // Maybe
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",

    // No
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ],

  create: function(index) {
    var self = Object.create(this);
    self.index = index !== undefined ? index : self.random(self.list.length - 1);
    self.message = self.list[self.index];
    self.type = self.getType();
    return self;
  },

  getType: function () {
    if (this.index === 0) return "ask"
    if (this.index <= 10) return "yes";
    if (this.index <= 15) return "maybe";
    return "no";
  },

  random: function(max) {
    return new Random(Random.engines.mt19937().autoSeed()).die(max);
  }
};

module.exports = Answer;
