



var tournament;
var tournamentID;
var questions;

var options = {
  valueNames: [ 'name', 'born' ],
  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = [{
    name: 'Jonny Strömberg',
    born: 1986
  },
  {
    name: 'Jonas Arnklint',
    born: 1985
  },
  {
    name: 'Martina Elm',
    born: 1986
}];

var userList = new List('users', options, values);

userList.add({
  name: "Gustaf Lindqvist",
  born: 1983
});

/*---------------------Games---------------------*/


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

});








   tournamentID = "52a59b8e8cff1c0200000009"; 

    /*Same origin security problem bypass - change to simple get once running on same server */



  
  var xhr = new XMLHttpRequest();
  //---------------------------------
  xhr.open("get", "http://newbetwithfriends.herokuapp.com/?header=getT&tournamentId=" + tournamentID, true);
  xhr.onload = function(){  //instead of onreadystatechange
      //alert("Data: " + xhr.responseText + "\nStatus: " );
      tournament = eval("(" + xhr.responseText + ')');
      questions = tournament.questions;

      
      for (var i = 0; i<questions.length ; i++) {
        
        userList.add({
        name: questions[i].question,
        born: 1983
         
      });
    }

      userList.add({
        name: "hdh" + tournament.response,
        born: 1983
    });
  };
  xhr.send(null);
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
