// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var fs = require('fs');

// app.get('/', (req, res) => {
//   res.writeHead(200, {'Content-Type':'text/html'});
  
//   fs.readFile('./index.html',null, function(error,data){
//     if (error){
//       res.writeHead(404);
//       res.write('Fine not found');
//     } else {
//       var name = 'hello';
//       res.write(data);
//     }
//     res.end();
//   });
// });

// app.get('/', function(req, res) {
//   var name = 'hello';
//   res.render("./index", {name:name});
// });

app.get('/', function(req, res) {
  var data = {
      name:'hello'
  };

  res.render('./index', data);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'meet-264900',
  keyFilename: 'meet-94f2ef8e9251.json',
});

let docRef = db.collection('users').doc('alovelace');

// let setAda = docRef.set({
//   first: 'Ada',
//   last: 'Lovelace',
//   born: 1815
// });

module.exports = app;
