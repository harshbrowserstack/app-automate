exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './test/remoteParallel/*.js'
  ],
  exclude: [],

  maxInstances: 6,
  commonCapabilities: {
    project: "App automate assignment",
    build: 'App automate assignment - parallel',
    name: 'Remote paralle test - Wikipedia',
    app: "bs://284a2d86e26af2470d8353729ce13efdb28bb4b9",
    'browserstack.debug': true
  },

  // capabilities: [{
  //   device: 'Google Pixel 3',
  //   os_version: "9.0"
  // }, {
  //   device: 'Samsung Galaxy S10e',
  //   os_version: "9.0"
  // }],
  capabilities: [{
      deviceName: 'Samsung Galaxy Tab S8',
      platformVersion: '12.0',
      platformName: 'android',
  }, {
      deviceName: 'Google Pixel 7 Pro',
      platformVersion: '13.0',
      platformName: 'android',
  }, {
      deviceName: 'OnePlus 7',
      platformVersion: '9.0',
      platformName: 'android',
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
