const mongoclient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operation');

const url = 'mongodb://localhost:27017/';
const dbname = 'firstnode-mongo';

mongoclient.connect(url).then((client) => {
    // assert.equal(err, null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    const collection = db.collection('first mongo collection');


    dboper.insertDocument(db, { name: "Utsav", description: "Test" }, "first mongo collection")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocument(db, "first mongo collection");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(db, { name: "Utsav" }, { description: "Updated Test" }, "first mongo collection");
        })
        .then((result) => {
            console.log("Updated Document:\n", result.ops);

            return dboper.findDocument(db, "first mongo collection");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);

            return dboper.removeDocument(db, { name: "Utsav" }, "first mongo collection");
        })
        .then((result) => {
            console.log('Remove document : ',result.ops);

            return dboper.findDocument(db, "first mongo collection");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);

            return db.dropCollection("first mongo collection");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);
             return client.close();
        })
        .catch((err) => console.log(err));

})
// .catch((err) => console.log(err));
