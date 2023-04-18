let adminService = require('../service/adminService');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.ADMIN_TOKEN_SECRET

const registerAdmin = async function (req, res, next) {
  console.log('user req', req.body)
  let name = req.body['name']
  let email = req.body['email'];
  let password = req.body['password'];
  try {
    let admin = await adminService.register(name, email, password);
    let payload = { id: admin._id };
    const token = jwt.sign(payload, TOKEN_SECRET);
    res.status(200).send({ token });
  }
  catch (err) {
    console.log(err)
    res.status(400).send({ message: "User already existed" });
  }

}
const login = async function (req, res, next) {
  let email = req.body['email'];
  let password = req.body['password'];
  console.log("login", password)
  try {
    let admin = await adminService.login(email, password);
    let payload = { id: admin._id };
    const token = jwt.sign(payload, TOKEN_SECRET);
    res.status(200).send({ token });
  }
  catch (err) {
    console.log(err)
    res.status(401).send({ message: "Invalid user" });
  }
}
const getUserById = async function (req, res, next) {
  console.log('Req ', req.params);
  let userId = req.params.userId;
  let user = userService.getUserById(userId);
  return res.status(200).json(user);
}

module.exports = {
  getUserById,
  registerAdmin,
  login,
}