document.addEventListener('DOMContentLoaded', function() {
//["ESL_SC2", "OgamingSC2", "amazhs", "freecodecamp", "imaqtpie", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var twitchChannel = ["noobs2ninjas","RobotCaleb"];

  myRequest(twitchChannel);

  function myRequest(channelArray) {
    var clientId = "o22x09fbpjvt4nvw2p35gifaxpvj8o";
    var divContentNo = [
      ['stream_type', 'OffLine'],
      ['link', '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>']
    ];
    var xmlhttpip = new XMLHttpRequest();
    for (var index in channelArray) {
      if (channelArray.hasOwnProperty(index)) {
        xmlhttpip.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
            outputInfo(myObj);
            }
          }
        };
        xmlhttpip.open("GET", "https://api.twitch.tv/kraken/streams/" + channelArray[index] + "?client_id=" + clientId, true)
        xmlhttpip.send();
      }
    }


  function outputInfo(myObj) {
  if (myObj.stream === null) {
    // document.getElementById("stream_type").innerHTML = "OffLine";
    // document.getElementById("link").innerHTML = '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>';

    writeDivOff(channelArray[index], divContentNo);
  } else {
    document.getElementById("stream").innerHTML = '<div id="game">' + myObj.stream.game +
      '</div><div id="stream_type">' + myObj.stream.stream_type + ' </div><div id="preview"><img src=' + myObj.stream.preview.medium +
      '</div><div id="link"><a href=' + myObj.stream.channel.url + ' ' + 'target="_blank">' + myObj.stream.channel.url + '</a></div>'

  }
}



  function writeDivOff(channelName, divContentNo) {
    for (var i = 0, l = divContentNo.length; i < l; i++) {
      var nameAppend = channelName + "_" + divContentNo[i][0];
      var div = document.createElement("div");
      div.setAttribute("id", nameAppend);
      var element = document.getElementById("stream");
      element.appendChild(div);
      document.getElementById(nameAppend).innerHTML = divContentNo[i][1];
    }
  }


})
