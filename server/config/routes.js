const home = require("../controllers/home");

module.exports = (app) => {
    app.post('/login', (req, res) => {
        home.login(req, res);
    });

    app.get('/getsession', (req, res) => {
        home.getSession(req, res);
    });

    app.get('/logout', (req, res) => {
        home.logout(req, res);
    });

    app.get('/users', (req, res) => {
        home.getUsers(req, res);
    });

    app.post('/items', (req, res) => {
        home.addItem(req, res);
    });

    app.get('/items/:id', (req, res) => {
        home.getItems(req, res);
    });

    app.get('/users/:id', (req, res) => {
        home.getUser(req, res);
    });

    app.get('/items/:id/check', (req, res) => {
        home.check(req, res);
    });

    app.get('*', (req, res) => {
       return res.redirect("/");
    });
}
