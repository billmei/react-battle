var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

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
    // Fetch info from github then update state
    // this.state.isLoading = false;
  },

  componentWillReceiveProps: function() {
    console.log('ConfirmBattleContainer', 'componentWillReceiveProps');
  },

  componentWillUnmount: function() {
    console.log('ConfirmBattleContainer', 'componentWillUnmount');
  },

  render() {
    console.log('ConfirmBattleContainer', 'rendering!')
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    );
  },
})

module.exports = ConfirmBattleContainer;
