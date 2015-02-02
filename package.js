Package.describe({
  name: 'okgrow:iron-router-autoscroll',
  version: '0.0.4',
  summary: 'Scroll to the top of the page (or to a hash if given) after a route change if using Iron Router',
  git: 'https://github.com/okgrow/iron-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('iron:router@1.0.7', 'client', {weak: true});
  api.addFiles('client/iron-router-autoscroll.js', 'client');
});

// TODO
// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('iron-router-autoscroll');
//   api.addFiles('test/iron-router-autoscroll-tests.js');
// });