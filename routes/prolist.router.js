var express = require('express');
var router = express.Router();

var prolistCtrl = require('../controllers/prolist.ctrl');


router.get("/prolistF",prolistCtrl.proListFemale);
router.get("/prolistM",prolistCtrl.proListMale);
router.get("/proListF/:id",prolistCtrl.proListFemaleone);
router.post("/addProList",prolistCtrl.addProItem);

module.exports = router;