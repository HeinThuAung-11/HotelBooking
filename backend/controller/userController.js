let userService = require("../service/userService");
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const registerUser = async function (req, res, next) {
  console.log("user req", req.body);
  let firstName = req.body["firstName"];
  let lastName = req.body["lastName"];
  let email = req.body["email"];
  let password = req.body["password"];
  let phoneNumber = req.body["phoneNumber"];
  let address = req.body["address"];
  try {
    let user = await userService.register(
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address
    );
    console.log("user", user);
    let payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "User already existed" });
  }
};
const login = async function (req, res, next) {
  let email = req.body["email"];
  let password = req.body["password"];
  // console.log("login", email, password);
  try {
    let user = await userService.login(email, password);
    let payload = { id: user._id };
    const token = jwt.sign(payload, TOKEN_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Invalid user" });
  }
};
const getUserById = async function (req, res, next) {
  // console.log("Req ", req.params);
  let userId = req.params.userId;
  let user = await userService.getUserByIdService(userId);
  // console.log("Getuserbyid", user, userId);
  return res.status(200).json(user);
};

module.exports = {
  getUserById,
  registerUser,
  login,
};
