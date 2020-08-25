const MongoClient = require("mongodb").MongoClient;
var cachedDb;
export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.MONGODB_URI, {
      native_parser: true,
      useUnifiedTopology: true,
    })
      .then((client) => {
        let db = client.db("DATA_BASE_NAME");
        console.log("New Database connection");
        cachedDb = db;
        return cachedDb;
      })
      .catch((error) => {
        console.log("Mongo Connection error");
        console.log(error);
      });
  }
};
