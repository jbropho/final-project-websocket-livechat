// Event handler for clicking on login button
async function onLogin(e) {
  await submitUserDetails('auth/login').then(
  result => processResult(result)).catch(err => {
  console.log(err); e.preventDefault()});
  redirectToChat() ||
  redirect(`${HOME}`);
}

// Event handler for clicking on signup button
async function onSignup(e) {
  if(!isEqual()) return;
  await submitUserDetails('auth/signup').then(
  result => processResult(result)).catch(err => {
  console.log(err); e.preventDefault()})
  redirectToChat() ||
  redirect(`${HOME}`);
};
