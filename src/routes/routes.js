const express = require('express');
const router = express.Router();
const { verifyToken ,receivedMessage } = require("../controllers/whatsappController");
router.get("/",verifyToken)
router.post("/", receivedMessage)

module.exports = router;
