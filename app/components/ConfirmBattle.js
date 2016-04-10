var React = require('react');
var PropTypes = React.PropTypes;

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
    <div className="row">
      <div className="col-xs-12">
        {puke(props)}
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
