var express=require('express');
var router= express.Router();
var userController= require('../../controllers/api/userControllerApi');

router.get('/', userController.userLIst);
router.post('/create', userController.user_create);


module.exports=router;