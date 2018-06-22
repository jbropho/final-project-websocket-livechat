this.loginPageTest = function(browser) {
  browser
    .url('http://localhost:8080/')
    .assert.elementPresent('#username-input');
};
this.loginTest = function(browser) {
  browser
    .url('http://localhost:8080/');
};
