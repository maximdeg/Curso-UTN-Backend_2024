const verifyTokenMiddleware = (req, res, next) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
