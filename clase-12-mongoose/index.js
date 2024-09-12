import { mongoose } from "./config/mongoDB.config.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);
y;

new User(
  "Pepe",
  "pepe@pepe.com",
  "user",
  "pepe123",
  "23123123",
  "123 Fake Avenue"
).save();
