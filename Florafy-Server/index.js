const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

//* creating app with express
const app = express();
// use cors as a middleware
app.use(cors());
//* defining port
const port = process.env.PORT || 5000;

app.use(express.json());

require("dotenv").config();
console.log(process.env.DB_USER, process.env.DB_PASS);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clustercraft.fp390uo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCraft`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );

    // creating florafy database
    const florafyDB = client.db("florafyDB");
    const gardenersCollection = florafyDB.collection("gardenersCollection");
    const gardenersTipsCollection = florafyDB.collection(
      "gardenersTipsCollection"
    );

    // save gardeners data into database
    const gardenersDataJson = [
      {
        name: "Alice Green",
        age: 34,
        gender: "Female",
        status: "Active",
        experience: "5 years in vertical gardening and composting",
        image:
          "https://i.ibb.co/k2nvzpBy/young-woman-gardening-flowers-Portland.jpg",
        email: "alice.green@example.com",
        totalSharedTips: 8,
      },
      {
        name: "Tom Leafman",
        age: 42,
        gender: "Male",
        status: "Active",
        experience: "10 years in indoor plant care and hydroponics",
        image: "https://i.ibb.co/ymtkdDp7/man-with-greenhouse-Seattle.jpg",
        email: "tom.leafman@example.com",
        totalSharedTips: 14,
      },
      {
        name: "Sara Bloom",
        age: 29,
        gender: "Female",
        status: "Active",
        experience: "4 years in balcony gardening and pest control",
        image: "https://i.ibb.co/sd17xW7h/f4.jpg",
        email: "sara.bloom@example.com",
        totalSharedTips: 6,
      },
      {
        name: "James Oak",
        age: 51,
        gender: "Male",
        status: "Active",
        experience: "20+ years in organic farming and herbal gardens",
        image: "https://i.ibb.co/jkhpq6kQ/man-gardening-in-backyard-Denver.jpg",
        email: "james.oak@example.com",
        totalSharedTips: 20,
      },
      {
        name: "Lily Terra",
        age: 38,
        gender: "Female",
        status: "Active",
        experience: "7 years in soil management and compost systems",
        image: "https://i.ibb.co/TDVvPv25/f1.jpg",
        email: "lily.terra@example.com",
        totalSharedTips: 12,
      },
      {
        name: "Noah Sprout",
        age: 25,
        gender: "Male",
        status: "Active",
        experience: "3 years in urban gardening and DIY planters",
        image: "https://i.ibb.co/1BPggS4/male-gardener-with-plants-Austin.jpg",
        email: "noah.sprout@example.com",
        totalSharedTips: 5,
      },
      {
        name: "Emma Root",
        age: 33,
        gender: "Female",
        status: "Inactive",
        experience: "6 years in aquaponics and flower gardening",
        image: "https://i.ibb.co/23xJTMZQ/f3.jpg",
        email: "emma.root@example.com",
        totalSharedTips: 10,
      },
      {
        name: "Oliver Moss",
        age: 45,
        gender: "Male",
        status: "Inactive",
        experience: "15 years in bonsai and native plant preservation",
        image: "https://i.ibb.co/W4vg4kQ1/m1.jpg",
        email: "oliver.moss@example.com",
        totalSharedTips: 18,
      },
      {
        name: "Chloe Fern",
        age: 28,
        gender: "Female",
        status: "Inactive",
        experience: "3 years in container gardening and seed saving",
        image: "https://i.ibb.co/V0bTrbzh/f2.jpg",
        email: "chloe.fern@example.com",
        totalSharedTips: 4,
      },
      {
        name: "Liam Rooter",
        age: 39,
        gender: "Male",
        status: "Inactive",
        experience: "8 years in permaculture and edible landscapes",
        image: "https://i.ibb.co/W4vg4kQ1/m1.jpg",
        email: "liam.rooter@example.com",
        totalSharedTips: 9,
      },
    ];

    const bulkOps = gardenersDataJson.map((item) => ({
      updateOne: {
        filter: { email: item.email },
        update: { $set: item },
        upsert: true,
      },
    }));

    const result = await gardenersCollection.bulkWrite(bulkOps);

    app.get("/all-gardeners", async (req, res) => {
      const allGardeners = await gardenersCollection.find().toArray();
      res.send(allGardeners);
    });

    // set gardeners data into api /gardeners-details
    app.get("/gardeners-active", async (req, res) => {
      try {
        const sortedData = await gardenersCollection
          .find({ status: "Active" })
          .limit(6)
          .toArray();

        res.send(sortedData);
      } catch (error) {
        console.log("Error: ", error);
      }
    });

    // get and post the gardeners tips data in the database
    app.post("/gardeners-tips", async (req, res) => {
      try {
        const gardenersTipsData = req.body;

        const result = await gardenersTipsCollection.insertOne(
          gardenersTipsData
        );
        res.send(result);
      } catch (error) {
        console.log(error);
      }
    });

    // show gardeners tips data in the server web as api
    app.get("/gardeners-tips", async (req, res) => {
      const cursor = gardenersTipsCollection.find();
      const data = await cursor.toArray();
      res.send(data);
    });

    // show single tips data
    app.get("/gardeners-tips/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        console.warn("Invalid ID:", id);
        return res.status(400).send({ error: "Invalid ID format" });
      }

      const query = { _id: new ObjectId(id) };
      const result = await gardenersTipsCollection.findOne(query);

      if (!result) {
        return res.status(404).send({ error: "Tip not found" });
      }

      res.send(result);
    });

    // updating the tips data for like count with patch
    app.patch("/gardeners-tips/like/:id", async (req, res) => {
      const data = req.body;
      const dataNum = data.totalLiked;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const patchData = {
        $set: {
          likeCount: dataNum,
        },
      };
      const result = await gardenersTipsCollection.updateOne(filter, patchData);
      res.send(result);
    });

    // get id for delete single tips for each user
    app.delete("/gardeners-tips/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await gardenersTipsCollection.deleteOne(query);
      res.send(result);
    });

    // update the users submitted tips
    app.patch("/gardeners-tips/update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log(req.body);
      const updateDoc = {
        $set: req.body,
      };

      const result = await gardenersTipsCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // get top trending tips data
    app.get("/top-trending", async (req, res) => {
      const sortedData = await gardenersTipsCollection
        .find()
        .sort({ likeCount: -1 })
        .limit(6)
        .toArray();
      res.send(sortedData);
    });
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

// testing my server
app.get("/", (req, res) => {
  res.send("Hello world from my server");
});

app.listen(port, () => {
  console.log(`Started my server at port ${port}`);
});
