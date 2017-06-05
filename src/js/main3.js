document.addEventListener('DOMContentLoaded', function() {
  // ["ESL_SC2", "OgamingSC2", "amazhs", "freecodecamp", "imaqtpie", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var twitchChannel = ["noobs2ninjas"];
  myRequest(twitchChannel);
  // Get Twitch.tv status by using an AJAX request
  function myRequest(channelArray) {
    var clientId = "o22x09fbpjvt4nvw2p35gifaxpvj8o";
    var xmlhttpip = new XMLHttpRequest();
    for (var index in channelArray) {
      if (channelArray.hasOwnProperty(index)) {
        xmlhttpip.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            if (myObj.stream === null) {
              var divContentNo = [
                ['stream_type', 'OffLine'],
                ['link', '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>']
              ];
              writeDivOff(channelArray[index], divContentNo);
            } else {
              // var divContentYes = [
              //   ['name','<div id="game">' + myObj.stream.game +
              //     '</div>'] ,
              //   ['stream_type', 'OnLine'],
              //   ['preview', '<div id="preview"><img src=' + myObj.stream.preview.medium +
              //   '</div>'],
              //   ['link', '<a href=' + myObj._links.channel + "?client_id=" + clientId + ' ' + 'target="_blank">' + myObj._links.channel + '</a>']
              // ];
              // writeDivOn(channelArray[index], divContentYes);

          }
        };
        xmlhttpip.open("GET", "https://api.twitch.tv/kraken/streams/" + channelArray[index] + "?client_id=" + clientId, true)
        xmlhttpip.send();
      }
    }
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
