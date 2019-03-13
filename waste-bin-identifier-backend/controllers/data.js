const Bindata = require('../models/dataModel');
// @ts-ignore
const fs = require('fs');
const httpstatus = require('http-status');
// @ts-ignore

module.exports = {
    CreateBin(req,res){
        console.log(req.body);


        if(req.body.condition == 0){
            const condition = "Good Condition";
            const body = {
                qrdata: req.body.qrdata,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                asset: req.body.asset,
                condition: condition,
                date: req.body.date,
                image: null,
                damage: req.body.damage
            };
            Bindata.create(body).then(data =>{
                 return res.status(httpstatus.CREATED).json({ data: 'Good Data is Created'});
            }, err => {
                 return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ data: 'Error'});
            });
        }else{
            const condition = "Damage Condition";
            const img = req.body.pic;
            const img1 = req.body.pic1;
            const img2 = req.body.pic2;
            const img3 = req.body.pic3;
            let base64Image = img.split(';base64,').pop();
            let base64Image1 = img1.split(';base64,').pop();
            let base64Image2 = img2.split(';base64,').pop();
            let base64Image3 = img3.split(';base64,').pop();

               let name = 'uploads/IMG-' + Date.now() + '.jpg';
               let name1 = 'uploads/IMG1-' + Date.now() + '.jpg';
               let name2 = 'uploads/IMG2-' + Date.now() + '.jpg';
               let name3 = 'uploads/IMG3-' + Date.now() + '.jpg';

              fs.writeFile(name,base64Image, { encoding: 'base64'}, function(err){
                     console.log('file Created')
                });

                fs.writeFile(name1,base64Image1, { encoding: 'base64'}, function(err){
                    console.log('file Created')
               });
               fs.writeFile(name2,base64Image2, { encoding: 'base64'}, function(err){
                console.log('file Created')
           });
           fs.writeFile(name3,base64Image3, { encoding: 'base64'}, function(err){
                  console.log('file Created')
             });
           console.log(name);
           console.log(name1);
           console.log(name2);
           console.log(name3);

            const body = {
                qrdata: req.body.qrdata,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                asset: req.body.asset,
                condition: condition,
                date: req.body.date,
                image: [name,name1,name2,name3],
                damage: req.body.damage


            };
            Bindata.create(body).then(data =>{
                 return res.status(httpstatus.CREATED).json({ data: 'Damage Data is Created'});
            }, err => {
                 return res.status(httpstatus.INTERNAL_SERVER_ERROR).json({ data: 'Error'});
            });
        }
    }
}
