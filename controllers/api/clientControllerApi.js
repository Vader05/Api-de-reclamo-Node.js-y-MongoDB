var Client = require('../../models/client');
const { NotExtended } = require('http-errors');

exports.clientLIst = function(req, res){
    Client.find({}, function(err, client){
        if(err) console.log(err);
        res.status(200).json({
            clients: client
        });
    });
}

exports.client_create = function(req, res){
    var client= new Client({dniClient: req.body.dniClient, name: req.body.name, telephone: req.body.telephone, email: req.body.email, user:req.body.user});
    client.save(function(err, result){
        if(err) return res.status(500).json(err);
        res.status(200).json(result); 
    });
}

exports.clientAddClaim= function(req, res){
    Client.updateOne({_id: req.body.id}, {claim:{ClaimArea:req.body.ClaimArea, description:req.body.description}}, function(err, result){
        if(err) res.status(500).json(err);
        res.status(200).json(result);
    });
}
exports.clientAddService = function(req,res){
    Client.findById(req.body.id).then(client=>{
        if(client!=null){
            client.service.push({employeeId:req.body.emp, serviceId:req.body.service,state:req.body.state})
            client.save().then(data=>{
                res.json(data);
            }).catch(err=>{
                res.json(err);
            })
        }
    }).catch(error=>{
        console.log(error);
    });
    //Client.updateOne({_id:req.body.id},{service:{employeeId:req.body.emp, serviceId:req.body.service,state:req.body.state}}, function(err, result){
     //   if(err) res.status(500).json(err);
      //  res.status(200).json(result);
    //});

}
