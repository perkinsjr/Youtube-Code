import { connectToDatabase } from "../lib/database";

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const db = await connectToDatabase();
    const collection = await db.collection("users");

    const users = await collection.find({}).toArray();

    res.status(200).json({ users });
  } else if (req.method === "POST") {
    const newuser = req.body;
    const db = await connectToDatabase();
    const collection = await db.collection("users");

    const users = await collection.insertOne(newuser);
    res.status(200).json({ users });
  } else {
    res.status(404).json({ status: "ERROR ROUTE NOT FOUND" });
  }
};
