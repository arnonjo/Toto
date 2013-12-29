



var tournament;
var tournamentID;
var questions;
var users;
var emails;

var options = {
  valueNames: [ 'name', 'score' ],
  item: '<li class = "userline"><a class="name"></a><span class="score"></span></li>'
};

var values = [{
    name: 'Jonny Strömberg',
    score: 1986
  },
  {
    name: 'Jonas Arnklint',
    score: 1985
  },
    {
    name: 'Jonas Arnklint',
    score: 1985
  },
    {
    name: 'Jonas Arnklint',
    score: 1985
  },
    {
    name: 'Jonas Arnklint',
    score: 1985
  },
  {
    name: 'Martina Elm',
    score: 1986
}];

var userList = new List('users', options, values);

userList.add({
  name: "Gustaf Lindqvist",
  score: 1983
});

/*---------------------Games---------------------*/

/*
var GamesOptions = {
  valueNames: [ 'Match', 'Date', 'Time', 'Venue', 'Oponent1Flag', 'Oponent1', 'Score1', 'Score2', 'Oponent2', 'Oponent2Flag'],
  item:'<li class="GameEntry"><a class="Match"></a><a class="Date"></a><a class="Time"></a><a class="Venue"></a><a class="Oponent1Flag"></a><a class="Oponent1"></a><a class="Score1"></a><a class="Score2"></a><a class="Oponent2"></a><a class="Oponent2Flag"></a></li>'
};

var GamesValues = [{
    Match: 1,
    Date: '22/11',
    Time: '14:33',
    Venue: 'Rio De Janero',
    Oponent1Flag: 'D',
    Oponent1: 'Argentina',
    Score1: 2, 
    Score2: 3, 
    Oponent2: 'France', 
    Oponent2Flag: 'F'

  },
  {
    Match: 1,
    Date: '22/11',
    Time: '14:33',
    Venue: 'Rio De Janero',
    Oponent1Flag: 'D',
    Oponent1: 'Argentina',
    Score1: 2, 
    Score2: 3, 
    Oponent2: 'France', 
    Oponent2Flag: 'F'
  },
  {
    Match: 1,
    Date: '22/11',
    Time: '14:33',
    Venue: 'Rio De Janero',
    Oponent1Flag: 'D',
    Oponent1: 'Argentina',
    Score1: 2, 
    Score2: 3, 
    Oponent2: 'France', 
    Oponent2Flag: 'F'
}];
*/
/*
var GamesList = new List('games', GamesOptions, GamesValues);

GamesList.add({
    Match: 1,
    Date: '22/11',
    Time: '14:33',
    Venue: 'Rio De Janero',
    Oponent1Flag: 'D',
    Oponent1: 'Argentina',
    Score1: 2, 
    Score2: 3, 
    Oponent2: 'France', 
    Oponent2Flag: 'F'
});
*/


$(document).ready(function(){




   $(".gameshead").after(
    "<tr><td class = 'match'> 1 </td>" + 
    "<td class = 'date'> 22/11 </td>" +
    "<td class = 'time'> 14:33 </td>" + 
    "<td class = 'venue'> Rio De Janero </td>" +
    "<td class = 'f32'><li class='flag ar'></li></td>" +
    "<td class = 'oponent1'> Argentina </td>" + 
    "<td><input class = 'score1' type='number' min='0' style='width:20px'></td>" + 
    "<td><input class = 'score2' type='number' min='0' style='width:20px' ></td>" +
    "<td class = 'oponent2'> France </td>" +
    "<td class = 'f32'><li class='flag fr'></li></td>"

    );
























   /*tournamentID = "52b055b74d67270200000001"; */
   tournamentID = "52c042fb6819e90200000032"; 

    /*Same origin security problem bypass - change to simple get once running on same server */



  
  var xhr = new XMLHttpRequest();
  //---------------------------------
  xhr.open("get", "http://newbetwithfriends.herokuapp.com/?header=getT&tournamentId=" + tournamentID, true);
  xhr.onload = function(){  //instead of onreadystatechange
      //alert("Data: " + xhr.responseText + "\nStatus: " );
      tournament = eval("(" + xhr.responseText + ')');
      questions = tournament.questions;
      users = tournament.users;
      emails = tournament.emails;



      //Validate if tournament.ok == 1 , If not error! 

  for (var i = 0; i<questions.length ; i++) {

  $(".gameshead").after(
      "<tr><td class = 'match'>" + questions[i].matchNumber + "</td>" + 
      "<td class = 'date'> " + questions[i].date + " </td>" +
      "<td class = 'time'> " + questions[i].time + " </td>" + 
      "<td class = 'venue'> " + questions[i].venue + " </td>" +
      "<td class = 'f32'><li class='flag " + questions[i].firstCountryCode + "'></li></td>" +
      "<td class = 'oponent1'> " + questions[i].firstCountryName + " </td>" + 
      "<td><input class = 'score1' type='number' min='0' style='width:20px'></td>" + 
      "<td><input class = 'score2' type='number' min='0' style='width:20px' ></td>" +
      "<td class = 'oponent2'> " + questions[i].secondCountryName + " </td>" +
      "<td class = 'f32'><li class='flag " + questions[i].secondCountryCode + "'></li></td>"

      );
console.log (questions[0]);
/*

poinst: {type: Number, required:true},
isDefault: {type:Number, default:0},
matchNumber: Number,
date: String,
time: String,
venue: String,
firstCountryCode: String,
firstCountryName: String,
secondCountryCode: String,
secondCountryName: String,
score1: {type: Number, default:-1},
score2: {type: Number, default:-1}
*/


}

//----------------Parse Users for User list - Shouldn't be "Questions" ------------------

      for (var i = 0; i<users.length ; i++) {
        
            userList.add({
            name: users[i].userName,
            score: 1983
             
          });
      }

      for (var i = 0; i<emails.length ; i++) {
              
            userList.add({
            name: emails[i],
            score: 1983
             
          });
      }

  };
  xhr.send(null);



});

  //---------------------------------
/*
  userList.add({
    name: "hdh" + tournament.response,
    born: 1983
  });

*/

/*
    $.getJSON("http://newbetwithfriends.herokuapp.com/?header=getT&tournamentId=" + tournamentID + "&callback=?",function(data,status){
      alert("Data: " + data.contents.questions + "\nStatus: " + status);
      tournament = data.contents;

    });

*/



/*
$.getJSON('http://anyorigin.com/get?url=google.com&callback=?', function(data){
    $('#output').html(data.contents);
});
*/
