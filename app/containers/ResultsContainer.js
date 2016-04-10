var React = require('react');
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: [],
    }
  },

  componentDidMount: function() {
    gitHubhelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false,
        })
      }.bind(this))
  },

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}/>
    );
  },
});

module.exports = ResultsContainer;
