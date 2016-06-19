var React = require('react');
var PropTypes = React.PropTypes;

var LoadingSpinner = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number,
  },
  getDefaultProps: function() {
    return {
      text: "Loading",
      speed: 300,
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText,
    }
  },
  componentDidMount: function() {
    var finalText = this.originalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === finalText) {
        this.setState({
          text: this.originalText,
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-12 text-center">
          <p><strong>{this.state.text}</strong></p>
          <p><span className="glyphicon glyphicon-spin glyphicon-refresh"></span></p>
        </div>
      </div>
    )
  },
});

module.exports = LoadingSpinner;
