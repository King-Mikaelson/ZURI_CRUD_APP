const express = require("express");
const router = express.Router();
const internCtrl = require("../controllers/internControllers")
console.log(internCtrl);

// POST REQUEST
router.post("/interns", internCtrl.createNewIntern )


//GET REQUEST
router.get("/", internCtrl.fetchAllIntern)

// PUT REQUEST
router.put("/interns/:id", internCtrl.updateSingleIntern)

// DELETE REQUEST
router.delete("/interns/:id", internCtrl.deleteSingleIntern)

module.exports = router;