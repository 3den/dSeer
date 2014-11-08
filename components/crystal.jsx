var React = require('react');

var Crystal = React.createClass({
  getInitialState: function() {
    return this.props.model.create(0);
  },

  onGaze: function() {
    this.setState(this.props.model.create());
  },

  onReset: function() {
    this.setState(this.props.model.create(0));
  },

  render: function() {
    return (
      <div className={"crystal " + this.state.type}>
        <div className="crystal-border">
          <button className="crystal-answer"
            onClick={this.onGaze}>
            {this.state.message}</button>
        </div>
        <div className="crystal-base"></div>
        <button className="crystal-reset"
          onClick={this.onReset}
          dangerouslySetInnerHTML={{__html: '&olarr;'}} />
        <p className="crystal-info">
          &copy; dSeer by &nbsp;
          <a target="_blank" href="https://github.com/3den">Marcelo Eden</a>
        </p>
      </div>
    );
  }
});

module.exports = Crystal;
