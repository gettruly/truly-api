var test = require('tap').test
var request = require('request');
var server = require('..');
var fs = require('fs');
var join = require('Path').join;

var donor1 = new Donor();
var shoe1;


server.start(onStart);
function onStart() {

  createDonor();
}

function createDonor () {
  test('Create New Donor', function (t) {

    var opts = {
      method: 'POST',
      uri: 'http://localhost:' + server.port + '/api/donors',
      json: donor1
    };

    request(opts, function (err, res, body) {
      if (err) {
        throw err;
      }
      donor1.id = res.body.id;

      t.ok( donor1.id !== undefined, '->New Donor Created with new ID');
      createSameDonor();
      t.end();
    })
  })
}

function createSameDonor () {
  test('Create Same Donor', function (t) {

    var opts = {
      method: 'POST',
      uri: 'http://localhost:' + server.port + '/api/donors',
      json: donor1
    };

    request(opts, function (err, res, body) {
      if (err) {
        throw err;
      }

      t.ok( res.statusCode === 500, '->Same donor not created');
      getDonor();
      t.end();

    })
  })
}

function getDonor() {

  test('Get Donor', function (t) {

    var opts = {
      url: 'http://localhost:' + server.port + '/api/donors/' + donor1.email,
      json: true  
    }
    
    request.get(opts, function (err, res, body) {
      if (err) {
        throw err;
      }

      t.ok( res.body[0].id === donor1.id, '->Got correct donor id by email');
      insertShoe();
      t.end();
    })
  })
}

function insertShoe() {

  test('Insert Shoe', function (t) {

     shoe1 = new Shoes(donor1);

    var opts = {
      method: 'POST',
      uri: 'http://localhost:' + server.port + '/api/shoes',
      json: shoe1
    };

    request(opts, function (err, res, body) {
      if (err) {
        throw err;
      }

      t.ok( res.body.id !== undefined, '->New shoe Created with new ID');
      server.stop();
      t.end();
    })
  })
}

function Donor () {
  this.name = getRandomS();
  this.email = getRandomS() + '@' + getRandomS() + '.com';
  this.phone = getRandomS();
  this.id = null;
}

function Shoes (donor) {
  
  var original_image = fs.readFileSync(join(__dirname,'img', 'shoes.jpg'));
  var base64Image = new Buffer(original_image, 'binary').toString('base64');
  this.img = base64Image;

  this.donorsid = donor.id;
  this.organizationid = 123;
  this.gender = (Math.random() >= 0.5) ? 'M' : 'F';
  this.size = Math.floor(Math.random()*100);
  this.type = (Math.random() >= 0.5) ? 'sandalia' : 'sapatilha';
  this.received_date = Date();
  this.sent_date = '';
}

function getRandomS () {
  var n = Math.floor(Math.random()*100000); 
  return n.toString();
} 