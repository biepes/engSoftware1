const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  uf: String,
  cidade: String,
  hospital: String,
});

const storage = mongoose.model("Hospital", HospitalSchema);

module.exports = {
  storage: storage,
};
