const socket = io();

socket.on("hello", (msg) => {
  document.write(msg);
});
