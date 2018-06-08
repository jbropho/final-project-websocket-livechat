// When the window loads:
// redirect to chatroom if user is logged in
// else assign event listeners
window.onload = async function() {
  await redirectToChat();
  listen();
}

// assign event listeners
const listen = _ => {
  let signup = document.getElementById('signup');
  let login = document.getElementById('login-btn');
  login && login.addEventListener('click', onLogin);
  signup && signup.addEventListener('click', onSignup);
}

// send authorisation request to backend, redirect to correct location
async function onChat(e) {
  const url = `${HOME}chat/verify`;
  const headers = { 'x-access-token': token() }
  const json = await sendRequest('GET', url, '', headers).then(
  res => JSON.parse(res)).catch(err => console.log(err));
  const location = json.location;
  location && redirect(`${HOME}${location}`);
  e && e.preventDefault();
}

// if user is logged in attempt to redirect to chatroom
async function redirectToChat() {
  if(window.sessionStorage.auth) {
    await onChat();
    return true;
  }
}
