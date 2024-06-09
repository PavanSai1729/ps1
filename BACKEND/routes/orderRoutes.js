const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const orderControl = require("../controllers/orderControl");


router.post("/add-order", orderControl.postRequest);

router.get("/get-orders", orderControl.getRequest);

router.delete("/delete-order/:id", orderControl.deleteRequest);



module.exports = router;