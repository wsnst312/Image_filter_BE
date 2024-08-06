const {Router} = require('express');
const {fileController} = require("../controllers");
const {upload, handleMulterErrors} = require('../middlewares/upload')
const router = Router();
router.post('/create',upload , handleMulterErrors,   fileController.uploadFile)
router.get('/list', fileController.fileList)

module.exports = router;
