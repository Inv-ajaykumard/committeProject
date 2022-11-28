
const exp = require('express');
const { newauth, newlogin, csvAuth } = require('../controller/Auth');
const router=exp.Router();
router.post("/post",newauth)
router.post("/login",newlogin)
router.post("/csv/Upload",csvAuth)

module.exports = router;