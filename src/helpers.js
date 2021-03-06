import { sendMessage } from './client.js'

function updateScroll(elem){
  var element = document.getElementById(elem);
  if (element) element.scrollTop = element.scrollHeight;
}

function findWebsocketAddress() {
  return process.env.NODE_ENV === 'production' ?
    'ws://finalprojectwebsocketlivechat.herokuapp.com/'
    : 'http://localhost:8080/'
}

const messageReader = _ => document.getElementById('text-field').value;
const clearMessageField = _ => document.getElementById('text-field').value = '';

function handlePostClick(name, roomName) {
  var message = messageReader();
  checkIfMessageEmptyAndSend(name, message, roomName);
  document.getElementById("text-field").focus();
}

function enterClick() {
  document.addEventListener("keyup", function(event){
    var clickedButton = document.getElementById("send-msg");
    var userText = document.getElementById('text-field');
    didUserEnter(userText, clickedButton);
  }
)}

function checkIfMessageEmptyAndSend(name, message, roomName) {
  if(message) {
    sendMessage(roomName, { author: name, content: messageReader()});
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

var defaultRooms = [
  'Main',
  'Ping-pong',
  'March-2018',
  'theDonald',
  'irbe\'s vim land',
  'Tech talk',
  'Pub talk',
  'TDD',
  'Dark web',
  'NodeJS',
  'Hackathons',
  'Honeybadger roams',
  'Junior spesh',
  'Aerobics room',
  'Activities',
  'Books',
  'News',
  '4chan',
  'Sports',
  'Ice Hockey',
  'Politics',
  'Culture',
  'Music',
  'Food',
  'Pizza',
  'Gaming',
  'Booty Wine'

]

export {
  updateScroll,
  handlePostClick,
  enterClick,
  messageReader,
  clearMessageField,
  findWebsocketAddress,
  defaultRooms
};
