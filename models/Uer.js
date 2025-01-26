const { mongoose } = require("mongoose");

let user_data = mongoose.Schema({
  Username: {
    type: String,
    require: true,
  },
  passsword: {
    type: Number,
    require: true,
  },
});

let userdata = mongoose.model("User_data", user_data);

module.exports = userdata;
