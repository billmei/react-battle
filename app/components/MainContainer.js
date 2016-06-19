var React = require('react')
var styles = require('../styles');

function MainContainer(props) {
  return (
    <div className="row">
      <div className="jumbotron col-xs-12 col-sm-8 col-sm-offset-2 text-center" style={styles.transparentBg}>
        {props.children}
      </div>
    </div>
  );
};

module.exports = MainContainer;
