var Dota2Api = require('../index').dota2api;


var should = require('should');
var key = '40715FF30001C33595C036DF0AFE9B74';
var dota2api = new Dota2Api(key, 'zh_CN', 'JSON');

describe('test/dota2api.test.js', function() {
  describe('getMatchHistory() vaild result data', function() {
    it('should have properties', function(done) {
      var config = {
        matches_requested: 2,
      };
      dota2api.getMatchHistory(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });

  describe('getMatchDetails() vaild result data', function() {
    it('should haver properties', function(done) {
      var config = {
        match_id: '1162775348'
      };
      dota2api.getMatchDetails(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });

  describe('getHeroes() vaild result data', function() {
    it('should haver properties', function(done) {
      var config = {
        language: 'en'
      };
      dota2api.getHeroes(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });

  describe('getLeagueListing() vaild result data', function() {
    it('should haver properties', function(done) {
      var config = {

      };
      dota2api.getLeagueListing(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });

  describe('getLiveLeagueGames() vaild result data', function() {
    it('should haver properties', function(done) {
      var config = {

      };
      dota2api.getLiveLeagueGames(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });

  describe('getMatchHistoryBySequenceNum() vaild result data', function() {
    it('should haver properties', function(done) {
      var config = {
        matches_requested: 5,
      };
      dota2api.getMatchHistoryBySequenceNum(config, function(err, data) {
        data.should.be.an.instanceof(Object);
        done();
      });
    });
  });
  describe('vaild err', function() {
    it('getMatchHistory 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        matches_requested: 2
      };
      dota2api.getMatchHistory(config, function(err, data) {
        err.should.be.type('string');
        done();
      });
    });
    it('getMatchDetails 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        match_id:'10086'

      };
      dota2api.getMatchDetails(config, function(err, data) {

        err.should.be.type('string');
        done();
      });
    });
    it('getHeroes 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        matches_requested: 2
      };
      dota2api.getHeroes(config, function(err, data) {
        err.should.be.type('string');
        done();
      });
    });
    it('getLeagueListing 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        matches_requested: 2
      };

      dota2api.getLeagueListing(config, function(err, data) {
        err.should.be.type('string');
        done();
      });
    });
    it('getLiveLeagueGames 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        matches_requested: 2
      };

      dota2api.getLiveLeagueGames(config, function(err, data) {
        err.should.be.type('string');
        done();
      });
    });
    it('getLiveLeagueGames 403 err should be string', function(done) {
      var config = {
        key: 'errkey',
        matches_requested: 2
      };
      dota2api.getLiveLeagueGames(config, function(err, data) {
        err.should.be.type('string');
        done();
      });
    });
  });
});