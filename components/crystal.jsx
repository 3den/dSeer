var Crystal = React.createClass({
  getInitialState: function() {
    return {answer: "?"};
  },

  onGaze: function() {
    this.setState({answer: this.props.model.gaze()});
  },

  render: function() {
    return (
      <div className="crystal">
        <button className="crystal-answer" onClick={this.onGaze}>
          {this.state.answer}</button>
      </div>
    );
  }
});
