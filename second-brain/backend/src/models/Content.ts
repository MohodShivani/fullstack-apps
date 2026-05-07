import mongoose, { Schema, model } from "mongoose";

const ContentSchema = new Schema({
  title: String,
  link: String,
  type: {
    type: String,
    enum: ["youtube", "twitter"],
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // ✅ correct
    ref: "User",
    required: true
  }
}, { timestamps: true });

export const ContentModel = model("Content", ContentSchema);