var express =require("express");
var router =express.Router();
var controller = require("../controllers")
router.get("/all",controller.sayHelloWorld);
router.post("/",controller.create);
router.post("/login",controller.login);
module.exports=router;