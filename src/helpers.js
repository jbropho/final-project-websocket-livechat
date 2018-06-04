function updateScroll(){
  var element = document.getElementById("message-board");
  if (element) element.scrollTop = element.scrollHeight;
} 

function findWebsocketAddress() {
  return process.env.NODE_ENV === 'production' ?
  'ws://finalprojectwebsocketlivechat.herokuapp.com/'
  : 'http://localhost:8080/'
};

export {
  updateScroll,
  findWebsocketAddress
};