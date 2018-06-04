import { sendMessage } from './client.js'
function updateScroll(){
  var element = document.getElementById("message-board");
  if (element) element.scrollTop = element.scrollHeight;
}

function findWebsocketAddress() {
  return process.env.NODE_ENV === 'production' ?
    'ws://finalprojectwebsocketlivechat.herokuapp.com/'
    : 'http://localhost:8080/'
}
const messageReader = _ => document.getElementById('text-field').value;
const clearMessageField = _ => document.getElementById('text-field').value = '';

function handlePostClick(name) {
  var message = document.getElementById('text-field').value;
  checkIfMessageEmptyAndSend(message);
  document.getElementById("text-field").focus();
}

function enterClick() {
  document.addEventListener("keyup", function(event){
    var clickedButton = document.getElementById("send-msg");
    var userText = document.getElementById('text-field');
    didUserEnter();
  }
)}
function checkIfMessageEmptyAndSend(string) {
  if(string) {
    sendMessage({ author: name, content: messageReader() });
    clearMessageField();
  }
}

function didUserEnter(userText, clickedButton) {
  if (userText.value && event.keyCode === 13) {
    clickedButton.click();
    clickedButton.classList.add("active");
    setTimeout(function() {
      clickedButton.classList.remove("active");
    }, 200);
  }
}
export {
  updateScroll,
  handlePostClick,
  enterClick,
  messageReader,
  clearMessageField,
  findWebsocketAddress
};
