var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-2 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="row">
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Github Username"
                onChange={props.onUpdateUser}
                value={props.username}
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

module.exports = Prompt;
Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}
