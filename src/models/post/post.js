import mongoose, { Schema } from "mongoose";
import subject from "./subject";

class post {
  constructor() {
    new subject().constructModel();
  }

  initSchema() {
    const schema = new Schema({
      title: { type: String, required: true },
      body: { type: String }
    });

    return mongoose.model("post", schema);
  }

  constructModel() {
    return this.initSchema();
  }
}

export default post;
