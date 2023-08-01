var express = require("express");
var router = express.Router();
const users = require("./../controller/userController");
/* GET users listing. */
router.get("/:userId", users.getUserById);
router.post("/", users.registerUser);
router.post("/login", users.login);

module.exports = router;
