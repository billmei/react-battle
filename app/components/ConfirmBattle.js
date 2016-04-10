var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true ? (
    <div className="row">
      <div className="col-xs-12 text-center">
        <p><strong>Loading!</strong></p>
        <p><span className="glyphicon glyphicon-spin glyphicon-refresh"></span></p>
      </div>
    </div>
  ) : (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-10 col-sm-offset-1'>
        <div className="row">
          <div className="col-sm-6">
            <p className="lead">Player 1</p>
            {puke(props.playersInfo[0])}
          </div>
          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            {puke(props.playersInfo[1])}
          </div>
        </div>
      </div>
      <div className='col-sm-1- col-sm-offset-1'>
        <div className="row">
          <div className='col-xs-12' style={styles.space}>
            <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-xs-12' style={styles.space}>
            <Link to="/playerOne">
              <button className="btn btn-lg btn-danger">
                Reselect Players
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
