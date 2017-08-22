module.exports = {
  // 'Demo test GM' : function (browser) {
  //   browser
  //     .url('https://ibmmethod-beta.mybluemix.net/devops/method')
  //     .waitForElementVisible('.searchbox.hidden-xs.hidden-sm', 60000, true,
  //       function(){}, 'Waiting for Search Input to become visible')
  //     .setValue('.searchbox.hidden-xs.hidden-sm', 'Test')
  //     .waitForElementPresent('#search-page', 60000)
  //     .pause(5000)
  //     .end();
  // }
  'Demo test for Gift Back' : function (browser) {
    browser
      .url('http://giftback-test.mybluemix.net')
      .waitForElementVisible('.container-fluid', 60000, true,
        function(){}, 'Waiting for page to load')
      .waitForElementPresent('#givefeedback', 60000)
      .click('#givefeedback')
      .waitForElementVisible('.media-object') //check if class that contains image will display
      .pause(1000)
      .end();
  }
};
