var express=require('express');
var router= express.Router();
var clientController= require('../../controllers/api/clientControllerApi');

router.get('/', clientController.clientLIst);
router.post('/create', clientController.client_create);
router.post('/claim', clientController.clientAddClaim);
router.put('/service', clientController.clientAddService);

module.exports=router;