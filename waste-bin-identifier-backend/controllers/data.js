const Bindata = require('../models/dataModel');
// @ts-ignore
const fs = require('fs');
const httpstatus = require('http-status');
module.exports = {
    CreateBin(req,res){
        console.log(req.body);
        const img = req.body.pic;
        let base64Image = img.split(';base64,').pop();
           
            
          fs.writeFile('tito-'+ Date.now() + '.jpg',base64Image, { encoding: 'base64'}, function(err){
                 console.log('file Created')
            });
           console.log(req.url);
            
        // if(req.body.condition == 0){
        //     const condition = "Good Condition";
        //     const body = {
        //         qrdata: req.body.qrdata,
        //         latitude: req.body.latitude,
        //         longitude: req.body.longitude,
        //         condition: condition,
        //         date: req.body.date,
        //         image: req.body.pic,
        //         damage: req.body.damage
        //     };
        //     Bindata.create(body).then(data =>{
        //          return res.status(httpstatus.CREATED).json({ data: 'Good Data is Created'});
        //     }, err => {
        //          return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ data: 'Error'}); 
        //     });
        // }else{
        //     const condition = "Damage Condition";
        //     const img = req.body.pic;
        //     const base64data = img.replace(/^data:image\/png;base64,/,"");
        //     // @ts-ignore
        //     var binarydata = new Buffer(base64data, 'base64');
        //     fs.writeFileSync('tito.jpg',binarydata);
        //     const body = {
        //         qrdata: req.body.qrdata,
        //         latitude: req.body.latitude,
        //         longitude: req.body.longitude,
        //         condition: condition,
        //         date: req.body.date,
        //         image: req.body.pic,
        //         damage: req.body.damage
                

        //     };
        //     Bindata.create(body).then(data =>{
        //          return res.status(httpstatus.CREATED).json({ data: 'Damage Data is Created'});
        //     }, err => {
        //          return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ data: 'Error'}); 
        //     });
        // }
    }
}