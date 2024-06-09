const Order = require("../models/orderModel");

exports.postRequest = async(req, res, next) => {
    try{
        const price = req.body.price;
        const dish = req.body.dish;
        const table = req.body.table;

        const data = await Order.create({price: price, dish: dish, table: table});
        res.status(201).json({newOrder: data});
    }
    catch(error){
        console.log("post request in database is failed", json.stringify(error));
        res.status(500).json({error: error});
    }
}

exports.getRequest = async(req, res, next) =>{
    try{
        const orders = await Order.findAll();
        res.status(200).json({allOrders: orders});

    }
    catch(error){

        console.log("get orders from database failed", JSON.stringify(error));
        res.status(500).json({error: error});

    }
}

exports.deleteRequest = async(req, res, next) => {
    try{
        const oId = req.params.id;
        await Order.destroy({where: {id: oId}});
        res.sendStatus(200);
    }
    catch(error){
        res.status(500).json({error: error});
        console.log("delete order from database is failed.", JSON.stringify(error));
    }
}
