var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      isLoading: true,
      scores: [],
    }
  },

  componentDidMount: function() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false,
        })
      }.bind(this))
  },

  render() {
    return (
      <div className="container">
        <Results
          isLoading={this.state.isLoading}
          playersInfo={this.props.location.state.playersInfo}
          scores={this.state.scores}
        />
      </div>
    );
  },
});

module.exports = ResultsContainer;
