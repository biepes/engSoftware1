const User = require('../models/Usuario')
const Session = require('../models/Session')

module.exports = {
    async store(req, res) {
        const {username} = req.body;
        const {senha} = req.body;

        const user = await User.findOne({ username, senha })
        const cookie = Math.random().toString();

        if (user) {
            let session = await Session.findOne({ user: user.username})

            if (session) {
                session = await Session.findOneAndUpdate({user: user.username}, {session: cookie}, {new: true})
            } else {
                session = await Session.create({session: cookie, user: user.username})
            }

            res.cookie('user', username, {maxAge: 900000, httpOnly: true})
            res.cookie('session', cookie, {maxAge: 900000, httpOnly: true})
            return res.json(session);
        } else {
            return res.json(null)
        }
    },
    async show(req, res) {
        let session = req.query.session
        
        if (session) {
            session = await Session.findOne({ session: `${session}` })
            return res.json(session);
        } else {
            return res.json(null)
        }
    },
    async delete(req,res) {
        let session = req.query.session

        if (session) {
            session = await Session.deleteOne({ session: toString(session) })
            return res.json(session);
        } else {
            return res.json(null)
        }
    }
};