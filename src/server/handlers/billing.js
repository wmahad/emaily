
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (router) => {
    router.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            description: '$5 for 5 credits',
            currency: 'usd',
            source: req.body.id,
        });
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
}
