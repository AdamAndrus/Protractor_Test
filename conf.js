// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}


// run the server by running what's in this tutorial
// http://www.protractortest.org/#/tutorial#setup
