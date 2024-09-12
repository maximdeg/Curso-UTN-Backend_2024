import mongoose from "mongoose";

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "APP_HOMEWORKING_UTN";
const DB_CONNECTION_STRING = `${DB_URL}/${DB_NAME}`;

mongoose.connect(DB_CONNECTION_STRING);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connection to DB successfull 🤖🚀🦾");
});

db.on("error", () => {
  console.error("DATABSE ERROR 🤖⚠️💥: ");
});

export {db, mongoose};