import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config/enviroment.config.js";
import ResponseBuilder from "../utils/builders/responseBuilder.js";
import User from "../models/user.model.js";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existsUser = await User.findOne({ email: email });

    if (existsUser) {
      const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(400)
        .setPayload({ detail: "The email is used by another user" })
        .setMessage("BAD_REQUEST")
        .build();
      return res.status(400).json(response);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = jwt.sign({ email: email }, ENV.JWT_SECRET, {
      expiresIn: ENV.JWT_TIME,
    });

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await newUser.save();

    const response = new ResponseBuilder()
      .setOk(true)
      .setStatus(200)
      .setPayload({ detail: newUser, message: "User created" })
      .setMessage("SUCCESS")
      .build();
    return res.status(200).json(response);
  } catch (err) {
    const response = new ResponseBuilder()
      .setOk(false)
      .setStatus(400)
      .setPayload({ detail: "Server error" })
      .setMessage("INTERNAL_SERVER_ERROR")
      .build();
    return res.status(400).json(response);
  }
};
