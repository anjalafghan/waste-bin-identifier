const Bindata = require('../models/dataModel');
const httpstatus = require('http-status');
module.exports = {
    CreateBin(req,res){
        console.log(req.body);
        if(req.body.condition == 0){
            const condition = "Good Condition";
            const body = {
                qrdata: req.body.qrdata,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                condition: condition,
                image: req.body.image
            };
            Bindata.create(body).then(data =>{
                 return res.status(httpstatus.CREATED).json({ message: 'Good Data is Created'});
            }, err => {
                 return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ message: 'Error'}); 
            });
        }else{
            const condition = "Damage Condition";
            const body = {
                qrdata: req.body.qrdata,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                condition: condition,
                image: req.body.image
            };
            Bindata.create(body).then(data =>{
                 return res.status(httpstatus.CREATED).json({ message: 'Damage Data is Created'});
            }, err => {
                 return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ message: 'Error'}); 
            });
        }
    }
}