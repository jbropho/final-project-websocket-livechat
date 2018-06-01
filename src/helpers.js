function updateScroll(){
  var element = document.getElementById("message-board");
  element.scrollTop = element.scrollHeight;
}

export {
  updateScroll
};