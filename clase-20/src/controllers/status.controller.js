import ResponseBuilder from "../utils/builders/responseBuilder.js";

export const getPingController = (req, res) => {
  try {
    const response = new ResponseBuilder();
    res
      .status(200)
      .json(
        response
          .setOk(true)
          .setStatus(200)
          .setMessage("SUCCESS")
          .setPayload({ message: "pong" })
          .build()
      );
  } catch (err) {
    res
      .status(500)
      .json(
        response
          .setOk(true)
          .setStatus(200)
          .setMessage("ERROR")
          .setPayload({ detail: err.message })
          .build()
      );
  }
};
