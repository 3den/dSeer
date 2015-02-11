var React = require('react');

module.exports = React.createClass({
    displayName: 'Crystal',

    getInitialState: function() {
        return this.props.model.create(0);
    },

    onGaze: function() {
        this.setState(this.props.model.create());
    },

    onReset: function() {
        this.setState(this.props.model.create(0));
    },

    isApp: function() {
        console.log(location)
        return (typeof location !== "undefined") &&
            /isApp/.test(location.href);
    },

    buildFooter: function() {
        return this.isApp() || (
            <footer className="crystal-info">
                &copy; dSeer by &nbsp;
                <a
                    target="_blank"
                    href="https://github.com/3den">
                    Marcelo Eden
                </a>
            </footer>
        );
    },

    render: function() {
        return (
            <div className={"crystal " + this.state.type}>
                <div className="crystal-border">
                    <button
                        className="crystal-answer"
                        onClick={this.onGaze}>
                        {this.state.message}
                    </button>
                </div>
                <div className="crystal-base"></div>
                <button
                    className="crystal-reset"
                    onClick={this.onReset}
                    dangerouslySetInnerHTML={{__html: '&olarr;'}}
                />
                {this.buildFooter()}
            </div>
       );
    }
});
