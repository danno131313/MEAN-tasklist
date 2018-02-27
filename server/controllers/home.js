const mongoose = require("mongoose");
const User = mongoose.model("User");
const ListItem = mongoose.model("ListItem");

module.exports = {
    login: function(req, res) {
        User.find(req.body, (err, users) => {
            if (users.length < 1) {
                if (req.body.name.trim().length < 2) {
                    return res.redirect('/');
                }
                User.create(req.body, (err, user) => {
                    if (err) {
                        return res.redirect('/');
                    }
                    req.session.user = user;
                    return res.json(user);
                })
            } else {
                req.session.user = users[0];
                return res.json(users[0]);
            }
        })
    },

    getSession: function(req, res) {
        return res.json(req.session);
    },

    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    getUsers: function(req, res) {
        User.find({}, (err, users) => {
            return res.json(users);
        });
    },

    addItem: function(req, res) {
        if (req.body.user == 'none') {
            delete req.body.user;
        } else {
            req.body.user = JSON.parse(req.body.user);
        }
        req.body.poster = req.session.user;
        ListItem.create(req.body, (err, item) => {
            if (err) {
                console.log(err);
                return res.redirect('/');
            }
            User.findById(req.session.user._id).exec((err, user) => {
                if (err) {
                    console.log("Wrong user in session");
                    return res.redirect("/");
                }
                user.listItems.push(item);
                user.save((err) => {
                    if (err) {console.log(err);}
                });
                if (req.body.user) {
                    User.findById(req.body.user._id, (err, user2) => {
                        user2.listItems.push(item);
                        user2.save();
                        return res.json(item);
                    });
                } else {
                    return res.json(item);
                }
            });
        });
    },

    getItems: function(req, res) {
        User.findById(req.params.id).exec((err, user) => {
            if (err) {
                console.log("Couldn't get items, ", err);
                return res.redirect('/');
            }
            return res.json(user.listItems);
        });
    },

    getUser: function(req, res) {
        User.findById(req.params.id, (err, user) => {
            return res.json(user);
        });
    },

    check: function(req, res) {
        ListItem.findById(req.params.id, (err, item) => {
            if (err) {
                console.log(err);
                return res.redirect("/");
            }
            if (req.session.user._id != item.poster._id) {
                if (item.user) {
                    if (req.session.user._id != item.user._id) {
                        console.log("That was not your item to check off!");
                        return res.redirect("/");
                    }
                } else {
                    console.log("That was not your item to check off!");
                    return res.redirect("/");
                }
            }

            User.findById(item.poster._id, (err, user) => {
                if (err) {
                    console.log(err);
                    return res.redirect("/");
                }
                for (let curritem of user.listItems) {
                    if (curritem._id == req.params.id) {
                        curritem.checked = !curritem.checked;
                        break;
                    }
                }
                user.save((err) => {
                    if (err) {
                        console.log(err);
                        return res.redirect("/");
                    }
                    if (item.user) {
                        User.findById(item.user._id, (err, otheruser) => {
                            if (err) {
                                console.log(err);
                                return res.redirect("/");
                            }
                            for (let item of otheruser.listItems) {
                                if (item._id == req.params.id) {
                                    item.checked = !item.checked;
                                    break;
                                }
                            }
                            otheruser.save((err) => {
                                if (err) {
                                    console.log(err);
                                    return res.redirect("/");
                                }
                                return res.json(user);
                            });
                        });
                    }
                });
            });
        });
    }
}
