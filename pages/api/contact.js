import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "invalid input.",
      });
      return;
    }
    // storing in database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
       client = await MongoClient.connect(
        "mongodb+srv://tarekanwer:etpBXzOb7NuOz2Au@cluster0.hvrekjg.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({
        message: "could not connect to database",
      });
      return;
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({
        message: "storing message failed",
      });
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored message",
      message: newMessage,
    });
  }
}

export default handler;
