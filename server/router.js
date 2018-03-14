const DCUserData = require("./models/DCUserData");

module.exports = function(app){
    app.get("/api/dcsave",function(req,res){
        DCUserData.find((err, datas)=>{
            if(err) return res.status(500).send({error: "database failure"});
            res.status(500).send({error: "database failure"});
            // res.json(datas);
        })
    });

    app.post("/api/dcsave/:galleryID",function(req,res){
        const userData = new DCUserData();
        console.log(req.body);
        userData.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        userData.username = req.body.username;
        userData.password = req.body.password;
        userData.galleryID = req.params.galleryID;

        userData.save(function(error){
            if(error){
                console.error(error);
                res.json({result:0});
                return;
            }

            res.json({result: 1});
        })
    });

    app.get("/api/dcsave/addip/:galleryID",function(req,res){
        DCUserData.find((err, datas)=>{
            const userData = new DCUserData();
            if(err) return res.status(500).send({error: "database failure"});
            userData.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            
            userData.save(function(error){
                if(error){
                    console.error(error);
                    res.json({result:0});
                    return;
                }
    
                res.json({result: 1});
            })
        })
    });
}