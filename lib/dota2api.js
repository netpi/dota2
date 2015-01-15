var urllib = require('urllib');


var Dota2Api = function(key, lan, format) {
  this.key = key;
  this.language = lan;
  this.format = format;
};

Dota2Api.prototype.getMatchHistory = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v001/';
  this.req(base_url, config, callback);
};
Dota2Api.prototype.getMatchDetails = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v001/';
  this.req(base_url, config, callback);
};
Dota2Api.prototype.getHeroes = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/';
  this.req(base_url, config, callback);
};
Dota2Api.prototype.getLeagueListing = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IDOTA2Match_570/GetLeagueListing/v0001/';
  this.req(base_url, config, callback);
};
Dota2Api.prototype.getLiveLeagueGames = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IDOTA2Match_570/GetLiveLeagueGames/v0001/';
  this.req(base_url, config, callback);
};
Dota2Api.prototype.getMatchHistoryBySequenceNum = function(config, callback) {
  var base_url = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistoryBySequenceNum/v0001/';
  this.req(base_url, config, callback);
};

Dota2Api.prototype.req = function(base_url, config, callback) {
  var paramArr = [];


  for (var p in config) {
    paramArr.push(p + '=' + config[p]);
  }
  paramArr.push('key=' + this.key);
  paramArr.push('language=' + this.language);
  paramArr.push('format=' + this.format);

  var url = base_url + '?' + paramArr.join('&');
  urllib.request(url, function(err, data, res) {

    if (!err && res.statusCode === 200) {
      callback(err, data.toString());
    } else if (res.statusCode === -1) {
      console.log(res.statusCode);
      callback(err);
    } else if (res.statusCode === 403) {
      err = '403 Please verify your params';
      callback(err);
    }
  });
};

module.exports = Dota2Api;