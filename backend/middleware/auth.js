const jwt = require("jsonwebtoken");

const verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  // console.log("Token ", token);
  if (!token)
    return res
      .status(401)
      .send("Access Denied / Unauthorized request");

  try {
    token = token.split(" ")[1]; // Remove Bearer from string

    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET); // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedUser)
      return res.status(401).send("Unauthorized request");
    // console.log("verfied user", verifiedUser);
    req.user = verifiedUser; // user_id
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid Token");
  }
};

const verifyAdminToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res
      .status(401)
      .send("Access Denied / Unauthorized request");

  try {
    token = token.split(" ")[1]; // Remove Bearer from string

    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    let verifiedAdmin = jwt.verify(
      token,
      process.env.ADMIN_TOKEN_SECRET
    ); // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedAdmin)
      return res.status(401).send("Unauthorized request");
    console.log("verfied Admin", verifiedAdmin);
    req.user = verifiedAdmin; // user_id
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid Token");
  }
};

module.exports = {
  verifyUserToken,
  verifyAdminToken,
};
