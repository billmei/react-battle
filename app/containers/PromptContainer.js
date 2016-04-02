var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      username: '',
    };
  },

  onUpdateUser: function(event) {
    this.setState({
      username: event.target.value,
    });
  },

  onSubmitUser: function(event) {
    event.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // Currently on playerTwo, go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      });
    } else {
      // Currently on playerOne, go to playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-2 text-center" style={transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.onSubmitUser}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Github Username"
                  onChange={this.onUpdateUser}
                  value={this.state.username}
                />
              </div>
              <div className="form-group col-sm-4 col-sm-offset-4">
                <button className="btn btn-block btn-success" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
})

module.exports = PromptContainer;
