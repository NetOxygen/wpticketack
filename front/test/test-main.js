var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
  }
})

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
      assets: 'build/js/app',
      config: 'build/js/app',
      components: 'build/js/app',
      csrf: 'build/js/app',
      logger: 'build/js/app',
      state: 'build/js/app',
      template: 'build/js/app',

      api: 'build/js/app',
      CartModel: 'build/js/app',
      CartItem: 'build/js/app',
      Screening: 'build/js/app',
      Ticket: 'build/js/app',

      'app/Booking/Form': 'build/js/app',
      'app/Cart/Cart': 'build/js/app',
      'app/Cart/CartIcon': 'build/js/app',
      'app/User/UserConnect': 'build/js/app',
      'app/Media/Carousel': 'build/js/app',
      'app/Media/YoutubeVideo': 'build/js/app',
      'app/Program/Filter': 'build/js/app',

      es6: 'build/js/app',
      babel: 'build/js/app',
      babel_polyfill: 'build/js/app',
      async: 'build/js/app',
      dottie: 'build/js/app',
      jquery: 'build/js/app',
      ticketack: 'build/js/app',
      urijs: 'build/js/app',
      moment: 'build/js/app',
      postal: 'build/js/app',
      lodash: 'build/js/app',
      underscore: 'build/js/app'
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
