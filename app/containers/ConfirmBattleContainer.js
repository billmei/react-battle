var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: [],
    };
  },

  componentDidMount: function() {
    // onShow: Make ajax requests
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]],
        })
      }.bind(this));
  },

  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  },

  render() {
    return (
      <div className="container">
        <ConfirmBattle
          isLoading={this.state.isLoading}
          onInitiateBattle={this.handleInitiateBattle}
          playersInfo={this.state.playersInfo}
        />
      </div>
    );
  },
})

module.exports = ConfirmBattleContainer;
