var test = require('tap').test
var request = require('request');
var server = require('..');

var newDoner1 = {
  name: 'Ze Manel',
  email: 'ze@manel.com',
  phone: '555123456'
}

server.start(onStart);
function onStart() {
  console.log('Test Suit started');

  test('New Doner', function (t) {

    var opts = {
      method: 'POST',
      uri: 'http://localhost:' + server.port + '/api/donors',
      json: newDoner1
    };

    request(opts, after);
  
    function after(err, res, body) {
      if (err) {
        throw err;
      }

      console.log(opts.json)
      t.ok(true, 'New Doner Created');
      t.end();
    }
  });
}


