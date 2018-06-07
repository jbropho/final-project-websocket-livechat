const HOME = window.location.href.includes('herokuapp.com') ? 'https://finalprojectwebsocketlivechat.herokuapp.com/' : 'http://localhost:8080/';
window.onload = async function() {
  listen();
  await redirectToChat();
}

const listen = _ => {
  let signup = document.getElementById('signup');
  let login = document.getElementById('login-btn');
  login && login.addEventListener('click', onLogin);
  signup && signup.addEventListener('click', onSignup);
}

const submitUserDetails = ext => {
  const url = `${HOME}${ext}`;
  const username = document.getElementById('username-field').value;
  const password = document.getElementById('password').value;
  const params = `username=${username}&password=${password}`;
  const headers = { 'Content-type': 'application/x-www-form-urlencoded' }
  return sendRequest('POST', url, params, headers);
};

async function onLogin(e) {
  await submitUserDetails('auth/login').then(result => processResult(result)).catch(err => { console.log(err); e.preventDefault()});
  redirect(`${HOME}?username=${window.sessionStorage.name}`);
  e.preventDefault();
}

async function onSignup(e) {
  await submitUserDetails('auth/signup').then(result => processResult(result)).catch(err => {console.log(err); e.preventDefault()})
  window.sessionStorage.auth ?
    await onChat() :
  redirect(`${HOME}`);
  e.preventDefault();
};

async function onChat(e) {
  const url = `${HOME}chat/verify`;
  const headers = { 'x-access-token': token() }
  const json = await sendRequest('GET', url, '', headers).then(res => JSON.parse(res)).catch(err => console.log('ERROR is ', err));
  const location = json.location;
  location && redirect(`${HOME}${location}`);
  e && e.preventDefault();
}

const sendRequest = (method, url, params='', headers={}) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        ~~(xhr.status/100) == 2 ? res(xhr.responseText) : rej(xhr.statusText);
      }
    };
    for(let head in headers) { xhr.setRequestHeader(head, headers[head]) };
    xhr.send(params);
  });
};

const setStorage = result => {for(let key in result) { window.sessionStorage.setItem(key, result[key]); }};
const processResult = result => {
  result = JSON.parse(result);
  setStorage(result);
}

const redirect = address => window.location.href = address;

const token = _ => window.sessionStorage.token;

async function redirectToChat() {
  if(window.sessionStorage.auth) {
    await onChat();
  }
}
