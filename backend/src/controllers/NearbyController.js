const User = require("../models/Usuario");
const Session = require("../models/Session");

module.exports = {
  async show(req, res) {
    let session = req.query.session;

    if (session) {
      session = await Session.findOne({ session: `${session}` });
      const user = await User.storage.findOne({ username: `${session.user}` });

      return res.json(await User.verifyNearbyCases(user));
    }
  },
};
