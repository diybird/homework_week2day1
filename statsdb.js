const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db('statsdb');
  console.log('Database "statsdb" created.');

  // Close the connection
  client.close();
});
