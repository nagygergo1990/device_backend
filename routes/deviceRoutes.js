var express = require('express');
var router = express.Router();

const deviceController = require("../controllers/deviceController");

router.get("/", deviceController.getAllDevices);
router.post("/", deviceController.createDevice);
router.delete("/:id", deviceController.deleteDevice);
router.put('/status-random', deviceController.updateDeviceStatuses);

module.exports = router;
