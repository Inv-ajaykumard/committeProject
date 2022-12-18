const exp = require('express');
const {  image } = require('../controller/ImageUpload');
const router=exp.Router();

router.post("/upload",image)

module.exports = router;