/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express');
const cors = require('cors');
const stripe = require("stripe")("sk_test_51NqzFeSBysFurLogKZIC8RF29AxUMuN6J8oB4DL7iYgzNi1NH0pYVqZHE0WdjfDvTCYYMkVSfMz0XvICoeGBG0pl00WUBEp8xp");

// API

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// Another Example
// app.get('/anu', (request, response) => response.status(200).send('hello Anu Be Happy'));

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this ammount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/clone-667f2/us-central1/api