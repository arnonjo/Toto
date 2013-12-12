



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
