import express from "express";
import ResponseBuilder from "../utils/ResponseBuiledrs.util.js";

const userRouter = express.Router();

userRouter.get("/:name", async (req, res) => {
  console.log(req.params.name);
  const name = req.params.name;
  const user = await getUserByName(name);

  res.send(user);
});

userRouter.get("/", (req, res) => {
  let response = new ResponseBuilder()
    .setOk(200)
    .setStatus(200)
    .setPayload({ message: "user data" })
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCESS)
    .build();

  res.json(response);
});

userRouter.get("/cantidad", (req, res) => {
  let response = new ResponseBuilder()
    .setOk(200)
    .setStatus(200)
    .setPayload({ message: 9 })
    .setCode(ResponseBuilder.CODE.GET_INFO_SUCCESS)
    .build();

  res.json(response);
});

export default userRouter;
