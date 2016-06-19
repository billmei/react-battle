var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var MainContainer = require('./MainContainer');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <MainContainer>
          <h1>Github Battle</h1>
          <p className="lead">What even is a jQuery?</p>
          <Link to='/playerOne'>
            <button type="button" className="btn btn-lg btn-success">
              Get Started
            </button>
          </Link>
        </MainContainer>
      </div>
    )
  }
})

module.exports = Home;
