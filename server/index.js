const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000
dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.MY

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db("simpleClud6")
        const userCollection = db.collection("users")

        app.get('/destinations', async (req,res) => {
            const cursor = await userCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/destinations/:id', async (req,res) => {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            }
            const result = await userCollection.findOne(query)
            res.json(result)
        })

        app.post("/destination", async (req,res) => {
            const newUser = req.body
            // console.log(newUser)
            const result = await userCollection.insertOne(newUser)
            res.send(newUser)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
