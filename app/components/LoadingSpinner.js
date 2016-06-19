var React = require('react');

function LoadingSpinner() {
  return (
  	<div className="row">
  	  <div className="col-xs-12 text-center">
  	    <p><strong>Loading!</strong></p>
  	    <p><span className="glyphicon glyphicon-spin glyphicon-refresh"></span></p>
  	  </div>
  	</div>
  );
};

module.exports = LoadingSpinner;
