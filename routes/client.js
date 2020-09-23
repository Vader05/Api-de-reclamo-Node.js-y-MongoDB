var express=require('express');
var router= express.Router();
var clientController= require('../controllers/clientControllerApi');

router.get('/', clientController.clientLIst);
router.post('/create', clientController.client_create);
router.post('/claim', clientController.clientAddClaim);
router.put('/service', clientController.clientAddService);
router.post('/clientid', clientController.findClientById );
router.post('/deleteclaim',clientController.removeClaim );
router.get('/finduser/:id',clientController.findClientByUser);
router.post('/removeservice', clientController.removeService);
router.post('/setclaimstate', clientController.updateStatusclaim);

module.exports=router;