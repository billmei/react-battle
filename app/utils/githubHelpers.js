var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var queryString = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  var GITHUB_URL = 'https://api.github.com/users/';
  return axios.get(GITHUB_URL + username + queryString);
};

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err);
    });
  },
};

module.exports = helpers;
