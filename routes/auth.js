
const exp = require('express');
const { newauth, newlogin } = require('../controller/Auth');
const router=exp.Router();
router.post("/post",newauth)
router.post("/login",newlogin)

module.exports = router;