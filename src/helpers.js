function updateScroll(){
  var element = document.getElementById("message-board");
  if (element) element.scrollTop = element.scrollHeight;
} 

export {
  updateScroll
};