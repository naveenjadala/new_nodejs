var express = require('express');
var router = express.Router();

var bottleList = require('../controllers/bottleList.ctrl');


router.get("/BottleList",bottleList.get);
router.post("/addBottleList",bottleList.save);
router.delete("/deleteBottleItem/:id", bottleList.delete);


module.exports = router;