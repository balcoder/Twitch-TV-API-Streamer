// // Ajax request supporting IE9+
// var request = new XMLHttpRequest();
// request.open('GET', '/my/url', true);
//
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//   } else {
//     // We reached our target server, but it returned an error
//
//   }
// };
//
// request.onerror = function() {
//   // There was a connection error of some sort
// };
//
// request.send();
document.addEventListener('DOMContentLoaded', function() {
  var twitchChannel = ["ESL_SC2", "OgamingSC2", "amazhs", "freecodecamp", "imaqtpie", "habathcx", "RobotCaleb", "noobs2ninjas"];
  // function getTwitchStreams(channelArray){
  //   for (var channel in channelArray) {
  //     if (channelArray.hasOwnProperty(channel)) {
  //       myRequest(channelArray[channel])
  //     }
  //   }
  //
  // }
  //
  // getTwitchStreams(twitchChannel);
  //
  // // Get Twitch.tv status by using an AJAX request
  // function myRequest(channel) {
  //   var clientId = "o22x09fbpjvt4nvw2p35gifaxpvj8o";
  //   var xmlhttpip = new XMLHttpRequest();
  //   xmlhttpip.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       myObj = JSON.parse(this.responseText);
  //       if (myObj.stream === null) {
  //         document.getElementById("stream_type").innerHTML = "OffLine";
  //         document.getElementById("link").innerHTML = '<a href=' + myObj._links.channel + "?client_id=" + clientId+ ' ' + 'target="_blank">' + myObj._links.channel + '</a>';
  //       } else {
  //         // document.getElementById("game").innerHTML = myObj.stream.game;
  //         // document.getElementById("stream_type").innerHTML = myObj.stream.stream_type;
  //         // document.getElementById("preview").innerHTML = "<img src=" + myObj.stream.preview.medium + ">";
  //         // document.getElementById("link").innerHTML = '<a href=' + myObj.stream.channel.url + ' ' + 'target="_blank">' + myObj.stream.channel.url + '</a>';
  //         document.getElementById("stream").innerHTML = '<div id="game">' + myObj.stream.game +
  //            '</div><div id="stream_type">' + myObj.stream.stream_type + ' </div><div id="preview"><img src=' + myObj.stream.preview.medium  +
  //            '</div><div id="link"><a href=' + myObj.stream.channel.url + ' ' + 'target="_blank">' + myObj.stream.channel.url +'</a></div>'
  //       }
  //     }
  //   };
  //   xmlhttpip.open("GET", "https://api.twitch.tv/kraken/streams/" + channel + "?client_id=" + clientId, true)
  //   xmlhttpip.send();
  // }
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
              document.getElementById("stream_type").innerHTML = "OffLine";
              document.getElementById("link").innerHTML = '<a href=' + myObj._links.channel + "?client_id=" + clientId+ ' ' + 'target="_blank">' + myObj._links.channel + '</a>';
            } else {
              document.getElementById("stream").innerHTML = '<div id="game">' + myObj.stream.game +
                 '</div><div id="stream_type">' + myObj.stream.stream_type + ' </div><div id="preview"><img src=' + myObj.stream.preview.medium  +
                 '</div><div id="link"><a href=' + myObj.stream.channel.url + ' ' + 'target="_blank">' + myObj.stream.channel.url +'</a></div>'
            }
          }
        };
        xmlhttpip.open("GET", "https://api.twitch.tv/kraken/streams/" + channelArray[index] + "?client_id=" + clientId, true)
        xmlhttpip.send();
      }
      }
    }
    // Writes out div elements appending stream name to id
    function writeStreams(channelName, jasonResponse){
      if (myObj.stream === null) {
        var nameAppend = channelName + "stream_type";
        var div = document.createElement("div");
        div.setAttribute("id", nameAppend)
        var status = document.createTextNode("OffLine");
        div.appendChild(status);

        var element = document.getElementById("stream");
        element.appendChild(div);

        document.getElementById("stream_type").innerHTML = "OffLine";
        document.getElementById("link").innerHTML = '<a href=' + myObj._links.channel + "?client_id=" + clientId+ ' ' + 'target="_blank">' + myObj._links.channel + '</a>';
      } else {
        document.getElementById("stream").innerHTML = '<div id="game">' + myObj.stream.game +
           '</div><div id="stream_type">' + myObj.stream.stream_type + ' </div><div id="preview"><img src=' + myObj.stream.preview.medium  +
           '</div><div id="link"><a href=' + myObj.stream.channel.url + ' ' + 'target="_blank">' + myObj.stream.channel.url +'</a></div>'
      }
    }

function writeHtml()


})
