const HOME = window.location.href.includes('herokuapp.com') ?
  'https://finalprojectwebsocketlivechat.herokuapp.com/' :
  'http://localhost:8080/';

// Take user details from page, initiate AJAX request
const submitUserDetails = ext => {
  const url = `${HOME}${ext}`;
  const username = document.getElementById('username-field').value;
  const password = document.getElementById('password').value;
  const params = `username=${username}&password=${password}`;
  const headers = { 'Content-type': 'application/x-www-form-urlencoded' };
  return sendRequest('POST', url, params, headers);
};

// AJAX request to backend
const sendRequest = (method, url, params='', headers={}) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        ~~(xhr.status/100) == 2 ? res(xhr.responseText) : rej(xhr.statusText);
      }
    };
    for(let head in headers) { xhr.setRequestHeader(head, headers[head]); }
    xhr.send(params);
  });
};

// Store values in session
const setStorage = result => {for(let key in result)
{ window.sessionStorage.setItem(key, result[key]); }};

//Process the response from backend
const processResult = result => {
  result = JSON.parse(result);
  setStorage(result);
};

// Redirect
const redirect = address => window.location.href = address;

// Get the authorisation token from the session
const token = _ => window.sessionStorage.token;
