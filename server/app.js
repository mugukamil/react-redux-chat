var express = require("express"),
  http = require("http"),
  path = require("path"),
  bodyParser = require("body-parser");

var app = express();
var server = http.createServer(app);
var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ server: server });
var colors = ["red", "green", "blue", "magenta", "purple", "plum", "orange"];
colors.sort(function(a, b) {
  return Math.random() > 0.5;
});
var clients = [];

wss.on("connection", function(ws) {
  clients.push(Object.assign(ws, { userID: Date.now() }));
  var userName = false;
  var userColor = false;
  ws.on("message", function(msg) {
    if (!userName) {
      userName = msg;
      userColor = colors.shift();

      for (var i = 0; i < clients.length; i++) {
        clients[i].send(
          JSON.stringify({
            type: "connected_new_user",
            userID: ws.userID,
            userName
          })
        );
      }

      console.log(userName + " login");
    } else {
      console.log(userName + " say: " + msg);
      var obj = {
        time: new Date().getTime(),
        text: msg,
        author: userName,
        color: userColor
      };
      var json = JSON.stringify({ type: "message", data: obj });
      for (var i = 0; i < clients.length; i++) {
        clients[i].send(json);
      }
    }
  });
  ws.on("close", function() {
    var index = clients.indexOf(ws);

    clients.splice(index, 1);
    if (userName !== false && userColor != false) {
      colors.push(userColor);
    }

    var json = JSON.stringify({ type: "disconnected_user", userID: ws.userID });
    for (var i = 0; i < clients.length; i++) {
      clients[i].send(json);
    }
  });
});

app.set("port", process.env.PORT || 4000);
app.set("views", __dirname + "/views");
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));

server.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
