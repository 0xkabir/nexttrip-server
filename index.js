const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ipnjwkc.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
        const database = client.db('bookTheTour')
        const toursCollection = database.collection('tours')

        app.get('/tours', async(request, response) => {
            const query = {}
            tours = await toursCollection.find(query).toArray()
            response.send(tours);
            response.send(tours)
        })
    }

    finally{

    }
}

run().catch((error) => console.error(error));


app.get('/', (request, response) => {
    response.send("NextTrip Server Online")
});
app.listen(port, () => {
    console.log(`NextTrip sever online at port ${port}`)
});