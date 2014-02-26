Package.describe({
  summary: "jQuery postMessage enables simple and easy window.postMessage communication."
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery.ba-postmessage.min.js', 'client');
});