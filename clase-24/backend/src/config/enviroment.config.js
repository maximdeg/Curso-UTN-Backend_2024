import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  FRONT_URL: process.env.FRONT_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TIME: process.env.JWT_TIME,
  GMAIL_PASS: process.env.GMAIL_PASS,
  GMAIL_USERNAME: process.env.GMAIL_USERNAME,
};

export default ENV;
