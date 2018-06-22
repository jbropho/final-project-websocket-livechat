this.loginPageTestUsername = function(browser) {
  browser
    .url('http://localhost:8080/')
    .assert.elementPresent('#username-input');
};
this.loginPageTestPassword = function(browser) {
  browser
    .url('http://localhost:8080/')
    .assert.elementPresent('#password-input')
    .end(__ => console.log('feature tests ran using nightwatch'));
};
