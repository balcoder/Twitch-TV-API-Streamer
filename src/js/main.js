document.addEventListener('DOMContentLoaded', function() {
//["ESL_SC2", "OgamingSC2", "amazhs", "freecodecamp", "imaqtpie", "habathcx", "RobotCaleb", "noobs2ninjas"];
go();
function go(){

  var twitchChannel = ["ESL_SC2", "OgamingSC2", "amazhs", "freecodecamp", "imaqtpie", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var arrayLength = twitchChannel.length;
  var clientId = "o22x09fbpjvt4nvw2p35gifaxpvj8o";
  for(var i = 0; i < arrayLength; i++ ){
    var url = "https://api.twitch.tv/kraken/streams/" + twitchChannel[i] + "?client_id=" + clientId;
    getJson(url, twitchChannel[i]);
  }

  // gets the JSON file using Ajax
  function getJson(url,channelName) {
    //var clientId = "o22x09fbpjvt4nvw2p35gifaxpvj8o";
    var xmlhttpip = new XMLHttpRequest();
    xmlhttpip.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        if (myObj.stream === null) {
          var channelUrl = myObj._links.channel +"?client_id=" + clientId;
          callAjax(channelUrl, writeDivOff)

          }

          // var divContentNo = [
          //   ['stream_type', 'OffLine'],
          //   ['link', '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>']
          // ];
          // //console.log(myObj._links.channel);
          // writeDivOff(channelName,divContentNo);
        else {
          var divContentYes = [
            ['game','<h1>' + myObj.stream.game + '</h1' ],
            ['stream_type', 'OnLine'],
            ['preview','<div id="preview"><img src=' + myObj.stream.preview.medium + '></div>'],
            ['link', '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>']
          ];
          writeDivOn(channelName,divContentYes);
        }
      }

    };
    xmlhttpip.open("GET", url, true)
    xmlhttpip.send();
  }

  //if stream offline write Divs to page
  function writeDivOff(jsonData) {
    var divContentNo = [
      ['stream_type', 'OffLine'],
      ['profile_banner', '<img src=' + jsonData.profile_banner  + ' ' + 'style="width:304px;height:180px;">'],
      ['link', '<a href=' + jsonData.url  + ' ' + 'target="_blank">' + jsonData.url + '</a>']
    ];
    var l = divContentNo.length;
    for (var i = 0; i < l; i++) {
      var nameAppend = jsonData.name + "_" + divContentNo[i][0];
      var div = document.createElement("div");
      div.setAttribute("id", nameAppend);
      var element = document.getElementById("stream");
      element.appendChild(div);
      document.getElementById(nameAppend).innerHTML = divContentNo[i][1];
    }
  }

  //if stream online write Divs to page
  function writeDivOn(channelName, divContentYes) {
    var l = divContentYes.length;
    for (var i = 0; i < l; i++) {
      var nameAppend = channelName + "_" + divContentYes[i][0];
      var div = document.createElement("div");
      div.setAttribute("id", nameAppend);
      var element = document.getElementById("stream");
      element.appendChild(div);
      document.getElementById(nameAppend).innerHTML = divContentYes[i][1];
    }
  }

  // Ajax function with callback
  function callAjax(url, callback){
      var xmlhttp;
      // compatible with IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
              callback(JSON.parse(xmlhttp.responseText));
          }
      }
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
  }



}
})
