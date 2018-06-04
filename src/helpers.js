function updateScroll(){
  var element = document.getElementById("message-board");
  if (element) element.scrollTop = element.scrollHeight;
}

function findWebsocketAddress() {
  return process.env.NODE_ENV === 'production' ?
    'ws://finalprojectwebsocketlivechat.herokuapp.com/'
    : 'http://localhost:8080/'
}

function handlePostClick(name) {
  var string = document.getElementById('text-field').value;
  if(string) {
  sendMessage({ author: name, content: messageReader() });
  clearMessageField();
  }
  document.getElementById("text-field").focus();
}

export {
  updateScroll,
  handlePostClick,
  findWebsocketAddress
};
