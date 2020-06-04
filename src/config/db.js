import mongoose from "mongoose";

import constants from "./constants";

mongoose.set("debug", true); // debug mode on

try {
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection
  .once("open", () => console.log("MongoDB Running"))
  .on("error", (e) => {
    throw e;
  });
