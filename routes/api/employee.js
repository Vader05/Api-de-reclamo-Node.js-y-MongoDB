var express=require('express');
var router= express.Router();
var employeeController= require('../../controllers/api/employeeControllerApi');

router.get('/', employeeController.employeeLIst);
router.post('/create', employeeController.employee_create);


module.exports=router;