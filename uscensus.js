const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const stats = [
  {
    'city': 'San Juan',
    'zip': '00926',
    'state': 'PR',
    'income': '34781',
    'age': '44'
  },
  // ... other data
];

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db('statsdb');
  const collection = db.collection('uscensus');

  collection.insertMany(stats, (err, res) => {
    if (err) throw err;
    console.log('Data added to the "uscensus" collection.');

    // Close the connection
    client.close();
  });
});

const newRecords = [
    {
      'city': 'Pacoima',
      'zip': '91331',
      'state': 'CA',
      'income': '60360',
      'age': '33'
    },
    {
      'city': 'Ketchikan',
      'zip': '99950',
      'state': 'AK',
      'income': '00000',
      'age': '00'
    }
  ];
  
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.insertMany(newRecords, (err, res) => {
      if (err) throw err;
      console.log('New records added to the "uscensus" collection.');
  
      // Close the connection
      client.close();
    });
  });
  
  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.findOne({ 'city': 'Corona', 'state': 'NY' }, (err, result) => {
      if (err) throw err;
      if (result) {
        console.log(`Zip code for Corona, NY: ${result.zip}`);
      } else {
        console.log('Corona, NY not found.');
      }
  
      // Close the connection
      client.close();
    });
  });

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.findOne({ 'city': 'Corona', 'state': 'NY' }, (err, result) => {
      if (err) throw err;
      if (result) {
        console.log(`Zip code for Corona, NY: ${result.zip}`);
      } else {
        console.log('Corona, NY not found.');
      }
  
      // Close the connection
      client.close();
    });
  });

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.find({ 'state': 'CA' }).toArray((err, result) => {
      if (err) throw err;
  
      if (result.length > 0) {
        result.forEach(city => {
          console.log(`City: ${city.city}, Income: ${city.income}`);
        });
      } else {
        console.log('No cities in California found.');
      }
  
      // Close the connection
      client.close();
    });
  });

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.updateMany({ 'state': 'AK' }, { $set: { 'income': '38910', 'age': '46' } }, (err, res) => {
      if (err) throw err;
  
      if (res.modifiedCount > 0) {
        console.log('Income and age updated for Alaska.');
      } else {
        console.log('No records to update for Alaska.');
      }
  
      // Close the connection
      client.close();
    });
  });

  MongoClient.connect(url, (err, client) => {
    if (err) throw err;
  
    const db = client.db('statsdb');
    const collection = db.collection('uscensus');
  
    collection.find().sort({ 'state': 1 }).toArray((err, result) => {
      if (err) throw err;
  
      if (result.length > 0) {
        console.log('Records sorted in ascending order by state:');
        console.log(result);
      } else {
        console.log('No records found.');
      }
  
      // Close the connection
      client.close();
    });
  });
  