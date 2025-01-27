const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "annie") {
    req.user = {
      name: "annie",
      id: 2,
    };

    next();
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = authorize;
