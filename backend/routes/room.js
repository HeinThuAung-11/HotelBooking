var express = require("express");
var router = express.Router();
const rooms = require("./../controller/roomController");
/* GET rooms listing. */
router.get("/", rooms.getAllRooms);
router.get("/:id", rooms.getRoomsById);

module.exports = router;
