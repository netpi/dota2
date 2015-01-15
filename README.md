
![](http://bnetpi.qiniudn.com/dota2/bg.jpg)
# Dota2
> a node-plugin for dota2 ;

## GETTING A KEY
First off get a dev key from here, [http://steamcommunity.com/dev/apikey](http://steamcommunity.com/dev/apikey) and login with your Steam account and you will get unique key.

## Installation

```sh
npm install dota --save
```
## Usage

```js
var Dota2Api = require('dota').dota2api;

var key = 'your key'; //Your personal API key (from above)
var language = 'zh_CN';// The language to retrieve results in (default is en_us) (see http://en.wikipedia.org/wiki/ISO_639-1 for the language codes (first two characters) and http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes for the country codes (last two characters))
var format = 'JSON' The format to retrieve results in ("JSON" or "XML")
var doa2api = new Dota2Api('your key','zh_CN','JSON');

var dota2api = new Dota2Api(key,language,format)

var config={
  account_id : '232210304',
  matches_requested : 10
}
// to get the latest 10 matches played by person whth 32-bit ID 232210304
dota2api.getMatchHistory(config,function(err,data){
  if(err){
    throw err;
  }else{
    // you will get the result
    console.log(data);
  }
});


```

### about api

#### getMatchHistory

sed to get a list of matches played.

##### Available Options
```js
var config {
  hero_id: < id > , // Search for matches with a specific hero being played (hero ID, not name, see HEROES below)
  game_mode: < mode > , // Search for matches of a given mode (see below)
  skill: < skill > , // 0 for any, 1 for normal, 2 for high, 3 for very high skill (default is 0)
  min_players: < count > , // the minimum number of players required in the match
  account_id: < id > , // Search for all matches for the given user (32-bit or 64-bit steam ID)
  league_id: < id > , // matches for a particular league
  start_at_match_id: < id > , // Start the search at the indicated match id, descending
  matches_requested: < n > , // Maximum is 25 matches (default is 25)
  tournament_games_only: < string > // set to only show tournament games
}
```
```js
  dota2api.getMatchHistory(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })

```
#### getMatchDetails


Used to get detailed information about a specified match.

##### Available options:
```js
var config={
  match_id=<id> // the match's ID
}
```
```js
  dota2api.getMatchDetails(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })
```
#### getHeroes

Used to get an UP-TO-DATE list of heroes.

##### Available Options
```js
var config={
  // nothing ...
  language:'en' // you can also set language just for this request
  format : 'XML' // you can also set format just for this request
}
```
##### Result Field Format:

- heroes - an array of the heroes:
  - name - the hero's in-game "code name"
  - id - the hero's numeric ID
  - localized_name - the hero's text name (language specific result - this field is not present if no language is specified)
- count - the total number of heroes in the list

```js
 dota2api.getHeroes(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })
```
#### getLeagueListing

Used to get a list of the tournament leagues that are available for viewing in the client (i.e. you can buy a ticket to them).
Intended for use in conjunction with GetLiveLeagueGames.

##### Available Options

```js
var config={
  // nothing ...
  language:'en' // you can also set language just for this request
  format : 'XML' // you can also set format just for this request
}
```

```js
 dota2api.getLeagueListing(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })
```

#### getLiveLeagueGames

Used to get a list of the tournament leagues that are available for viewing in the client (i.e. you can buy a ticket to them).
Intended for use in conjunction with GetLiveLeagueGames.

#####Available Options

Common options only (see above) - Note that if no language is specified, the API will return the in-game "string" placeholders for all fields marked with (language specific).


##### Result Field Format:

- leagues - an array of the leagues:
  - name - the league's full name (language specific)
  - leagueid - the league's numeric ID
  - escription - a description of the leauge (language specific)
  - tournament_url - the url of the tournament's home page

```js
 dota2api.getLiveLeagueGames(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })
```
#### getMatchHistoryBySequenceNum

Used to get the matches in the order which they were recorded (i.e. sorted ascending by match_seq_num).
This means that the first match on the first page of results returned by the call will be the very first public mm-match recorded in the stats.

```js
var config={
  start_at_match_seq_num=<id>,
  matches_requested=<n>
}
dota2api.getMatchHistoryBySequenceNum(config, function(err, data) {
    if (err) {
      throw err;
    } else {
      // you will get the result
      console.log(data);
    }
  })
```
