const app = require("express")();
const { static } = require("express");
const { resolve } = require("path");
const { Server } = require("socket.io");
const server = require("http").createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 4000;
const DOMAIN = "http://localhost";

io.on("connection", (socket) => {
  socket.emit("hello", "world");
  console.log("new connection");
});

app.use(static("public"));

server.listen(PORT, () => console.log(`Server running on ${DOMAIN}:${PORT}`));
