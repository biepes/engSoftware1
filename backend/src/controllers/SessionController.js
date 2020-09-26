const User = require('../models/Usuario')
const Session = require('../models/Session')

module.exports = {
    async store(req, res) {
        const {email} = req.body;
        const {senha} = req.body;

        const user = await User.findOne({ email, senha })
        const cookie = Math.random().toString();

        if (user) {
            let session = await Session.findOne({ user: user.email})
            if (session) {
                session = await Session.findOneAndUpdate({user: user.email}, {session: cookie})
            } else {
                session = await Session.create({session: cookie, user: user.email})
            }
            res.cookie('user', cookie, {maxAge: 1000000})
            return res.json(session);
        } else {
            return res.json(null)
        }
    },
    async show(req, res) {
        if (req.headers.cookie) {
            const cookie = req.headers.cookie.split('user=')[1]
            const session = await Session.findOne({ session: cookie })
            return res.json(session);
        } else {
            return res.json(null)
        }
    }
};