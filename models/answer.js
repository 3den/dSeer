var Answer = {
  list: [
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

  gaze: function() {
    return this.list[this.random(this.list.length -1)];
  },

  random: function(max) {
    return new Random(Random.engines.mt19937().autoSeed()).integer(0, max);
  }
};

if(typeof module !== "undefined") module.exports = Answer;
