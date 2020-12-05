const Hospital = require('../models/Hospital');

module.exports = {
  async show(req, res) {
    const hospitals = await Hospital.storage.find();

    return res.json(hospitals);
  },
};
