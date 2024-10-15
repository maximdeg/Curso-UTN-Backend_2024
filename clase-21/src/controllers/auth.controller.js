import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config/enviroment.config.js";
import ResponseBuilder from "../utils/builders/responseBuilder.js";
import User from "../models/user.model.js";
import { sendEmail } from "../utils/mail.util.js";

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

    const url_verification = `http://localhost:${ENV.PORT}/api/auth/verify/${verificationToken}`;

    const sentEmail = await sendEmail({
      to: email,
      subject: "Valida tu correo electronico",
      html: `
        <h1>Verificacion de correo electronico</h1>
        <p>Da click en el boton de abajo para verificar</p>
        <a 
            style='background-color: 'black'; color: 'white'; padding: 5px; border-radius: 5px;'
            href="${url_verification}"
        >Click aqui</a>
        `,
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
    return res.status(201).json(response);
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

export const verifyMailValidationTokenController = async (req, res) => {
  try {
    console.log("INSIDE VERIFICATION EMAIL TOKEN");

    const { verification_token } = req.params;

    if (!verification_token) {
      const response = new ResponseBuilder()
        .setOk(false)
        .setStatus(400)
        .setPayload({ detail: "Invalid verification token" })
        .setMessage("BAD_REQUEST")
        .build();
      return res.status(400).json(response);
    }

    const decoded = jwt.verify(verification_token, ENV.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email });

    if (!user) throw new Error("USER NOT FOUND");

    // if (user.emailVerified) {
    //   // verification logic
    // }

    user.emailVerified = true;

    await user.save();

    const response = new ResponseBuilder()
      .setOk(true)
      .setMessage("SUCCESS")
      .setStatus(200)
      .setPayload({
        message: "Email verified successfully",
      })
      .build();

    return res.status(200).json(response);
  } catch (err) {
    console.error(err.message);
  }
};
