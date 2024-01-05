const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

// connect db
require("./db/connection");

//import files
const Conversations = require("./models/Conversations");
const Users = require("./models/Users");
const Messages = require("./models/Messages");

const app = express();

// app use
app.use(cors());
app.use(express.json());


const port = 8000;

//routes
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/register", async (req, res, next) => {
  try {
    const { fullName, password, email } = req.body;

    if (!fullName || !password || !email) {
      res.status(400).send("please fill in the required field");
    } else {
      const isAlreadyExist = await Users.findOne({ email });

      if (isAlreadyExist) {
        res.status(400).send("User already exist");
      } else {
        const newUser = new Users({ fullName, email });
        bcryptjs.hash(password, 10, (err, hashedPassword) => {
          newUser.set("password", hashedPassword);
          newUser.save();
          next();
        });

        return res.status(200).send("User registered succefully");
      }
    }
  } catch (error) {
    console.error(error);
    // Send an appropriate response
    res.status(500).send("Internal Server Error");
  }
});
app.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send("Please fill all required fields");
    } else {
      const user = await Users.findOne({ email });
      if (!user) {
        res.status(400).send("User email or password is incorrect");
      } else {
        const validateUser = await bcryptjs.compare(password, user.password);
        if (!validateUser) {
          res.status(400).send("User email or password is incorrect");
        } else {
          const payload = {
            userId: user._id,
            email: user.email,
          };
          const JWT_SECRET_KEY =
            process.env.JWT_SECRET_KEY || "THIS_IS_A_JWT_SECRET_KEY";

          jwt.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: 84600 },
            async (err, token) => {
              await Users.updateOne(
                { _id: user._id },
                {
                  $set: { token },
                }
              );
              user.save();
              return res
                .status(200)
                .json({
                  user: {
                    id: user._id,
                    email: user.email,
                    fullName: user.fullName,
                  },
                  token: token,
                });
            }
          );
        }
      }
    }
  } catch (error) {
    console.log(error, "Error");
  }
});

app.post("/api/conversation", async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = new Conversations({
      members: [senderId, receiverId],
    });
    await newConversation.save();
    res.status(200).send("Conversation created succefully");
  } catch (error) {
    console.log(error, "error");
  }
});

app.get("/api/conversations/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const conversations = await Conversations.find({
      members: { $in: [userId] },
    });

    const conversationUserData = await Promise.all(
      conversations.map(async (conversation) => {
        const receiverId = conversation.members.find(
          (member) => member !== userId
        );
        const user = await Users.findById(receiverId);

        return {
          user: { email: user.email, fullName: user.fullName },
          conversationId: conversation._id,
        };
      })
    );

    res.status(200).json(conversationUserData);
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/message", async (req, res) => {
  try {
    const { conversationId, senderId, message, receiverId } = req.body;
    if ((!senderId, !message))
      return res.status().send("Please fill in required fields");
    if (!conversationId && receiverId) {
      const newConversation = new Conversations({
        members: [senderId, receiverId],
      });
      await newConversation.save();
      const newMessage = new Messages({
        conversationId: newConversation._id,
        senderId,
        message,
      });
      await newMessage.save();
      res.status(200).send("Message sentsuccefully");
    } else {
      return res.status(400).send("Please fill in required fields");
    }
    const newMessage = new Messages({ conversationId, senderId, message });
    await newMessage.save();
    res.status(200).send("Message sent succefully");
  } catch (error) {
    console.log(error, " Error");
  }
});

app.get("/api/message/:conversationId", async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    if (conversationId == "new") {
      return res.status(200).json([]);
    }
    const messages = await Messages.find({ conversationId });
    const messageUserData = await Promise.all(
      messages.map(async (message) => {
        const user = await Users.findById(message.senderId);

        return {
          user: { email: user.email, fullName: user.fullName },
          message: message.message,
        };
      })
    );

    res.status(200).json(messageUserData);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    const usersData = await Promise.all(
      users.map(async (user) => {
        return {
          user: { email: user.email, fullName: user.fullName },
          userId: user._id,
        };
      })
    );
    res.status(200).json(usersData);
  } catch (error) {
    console.log(error, "Error");
  }
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
