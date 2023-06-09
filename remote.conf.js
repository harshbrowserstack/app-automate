exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './test/remote.js'
  ],
  exclude: [],

  capabilities: [{
    project: "App automate assignment",
    build: 'App automate assignment - remote',
    name: 'Remote test - Wikipedia',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: "bs://284a2d86e26af2470d8353729ce13efdb28bb4b9",
    'browserstack.debug': true
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

