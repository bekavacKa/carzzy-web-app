const express = require('express');
const routes = express.Router();

const stripe = require('stripe');
const stripeLib = stripe('sk_test_51LnTnCBfCyeFqsH51s4Nvw4lxRfg41AWGC7EnFpe1zHRhbJZ2e2Zb7IRMG1Kjw1qiXDAWjKEfzYVzjXcEb9Z7qyu00NwUxqKc9')

routes.post('/init-payment', async (req,res) => {
    console.log("amount test", req.body.amount);

    const payment = await stripeLib.paymentIntents.create({
        // ! amount moram provjerit u stripe-u dokumentaciji jer mi u placanju dođe 100 puta manja cijena nego sta posaljem 
        amount: req.body.amount * 100,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    });

    res.send(payment.client_secret);
});

module.exports = routes;