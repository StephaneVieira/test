requirejs.config({
  paths: {
    'text': 'lib/text'
  }
});

requirejs([
  // 'Controller'
], function (
  // Controller
) {
  alert('COUCOU !');
});