var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    console.log('ConfirmBattleContainer', 'getInitialState');
    return {
      isLoading: true,
      playersInfo: [],
    };
  },

  componentWillMount: function() {
    console.log('ConfirmBattleContainer', 'componentWillMount');
  },

  componentDidMount: function() {
    console.log('ConfirmBattleContainer', 'componentDidMount');
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

  componentWillReceiveProps: function() {
    console.log('ConfirmBattleContainer', 'componentWillReceiveProps');
  },

  componentWillUnmount: function() {
    console.log('ConfirmBattleContainer', 'componentWillUnmount');
  },

  handleInitiateBattle: function() {
    this.context.router.push({
      pathame: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  },

  render() {
    console.log('ConfirmBattleContainer', 'rendering!')
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
