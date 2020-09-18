const chromedriver = require('chromedriver');

module.exports = {
  //src_folders : 'step_definitions/', //tests is a folder in workspace which has the step definitions
  page_objects_path: 'page_objects/', //page_objects folder where selectors are saved
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444'],
        screenshots: {
            enabled: true,
            path: 'screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};