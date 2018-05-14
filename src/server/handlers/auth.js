const passport = require('passport');

module.exports = (router) => {
    router.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    router.get('/auth/google/callback', passport.authenticate('google'));

    router.get('/auth/logout', (req, res) => {
        req.logout();
        res.send('logged out');
    });

    router.get('/api/current_user', (req, res) => {
        console.log(req.user);
        res.send(req.user);
    });
}
