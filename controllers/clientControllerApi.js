var Client = require('../models/client');

exports.clientLIst = function(req, res){
    Client.find({}, function(err, client){
        if(err) console.log(err);
        res.status(200).json(client);
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
    Client.findById(req.body.id).then(client=>{
        if(client!=null){
            client.claim.push({claimArea:req.body.claimArea, description:req.body.description})
            client.save().then(result=>{
                res.json(result);
            }).catch(err=>{
                res.json(err);
            })
        }
    }).catch(error=>{
        console.log(error);
    });
}

exports.clientAddService = function(req,res){
    Client.findById(req.body.clientId).then(client=>{
        if(client!=null){
            client.service.push(
            {
                serviceId: req.body.serviceId, 
                state: req.body.state
            })
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

exports.findClientById= function(req, res){
    Client.findById(req.body.id, function(err, result){
        if(err) console.log(err);
        if(result!=null){
            res.status(200).json(result);
        }else{
            res.status(500).json(err);
        }
    });
}

exports.removeClaim= function(req, res){
    var client =Client.findById(req.body.id);
    if(client!=null){
        client.claim.id(req.body.idclaim).remove();
        res.status(200);
    }else{
        res.status(403);
    }
    
}

exports.findClientByUser= function(req, res){
    Client.find({user: req.params.id}, function(err, result){
        if(err){
            console.log(err);
        }
            
        res.status(200).json(result);
    });
   
}