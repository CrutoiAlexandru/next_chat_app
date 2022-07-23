const { MongoClient } = require("mongodb");

// function for connecting to db
function mongoConnect(mail, password) {
  const uri = `mongodb+srv://CrutoiAlexandru:${process.env.CLUSTER_PASSWORD}@${process.env.CLUSTER_URL}?retryWrites=true&writeConcern=majority`;

  const client = new MongoClient(uri);

  addDoc(client, mail, password);

  console.log("ye");
}

// function for adding a document to a collection in the db
async function addDoc(client, mail, password) {
  const collection = client.db("next-chat-app").collection("users");

  const doc = { mail: mail, password: password };

  const result = await collection.insertOne(doc);

  console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

// function for deleting a document in db
async function delDoc() {}

// function for finding a document in db in order to see if the user already exists with the certain email account
async function findDoc() {}

export default function handler(req, res) {
  // retrieve password and user mail
  let mail = req.body.mail;
  let password = req.body.password;
  // post password in mongodb after sha256
  mongoConnect(mail, password);
  // send successful response
  res.status(200).send("Signup successful!");
}
