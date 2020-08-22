var User = require("../models/user");
async function sayHelloWorld(req, res) {
    var users = await User.find()
    return res.send({ users: users })

}
async function create(req, res) {
    console.log(req.body)
    var user = new User({ 
        email: req.body.email, 
        password: req.body.password, 
        name: req.body.name });
    await user.save();
    return res.send({ user: user })

}
async function login(req,res){
    var user = await User.findOne({email:req.body.email});
    if(user.password===req.body.password){
        return res.send({message:"welcome user "+user.name});
    }
    else{
        return res.status(403).send({message:"wrong pass"});
    }
}
module.exports = { sayHelloWorld, create,login }