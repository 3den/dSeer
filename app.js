var React = require('react'),
    Answer = require('./models/answer'),
    Crystal = require('./components/crystal.jsx');

React.render(Crystal({model: Answer}), document.getElementById('seer'));
