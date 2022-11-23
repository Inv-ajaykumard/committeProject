
const router = require("express").Router();
const { newmessage, displaymsg } = require("../controller/messagec");
const Message = require("../models/Message");
const { verifyuser } = require("../utils/verifytoken");

router.post("/:id", newmessage)

router.get("/:id", displaymsg)
module.exports = router;