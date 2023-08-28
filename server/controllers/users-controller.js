
const { log } = require("console");
let usersLogic=require("../logic/users-logic")
let express=require("express");
const { request } = require("http");


let router=express.Router();



router.post("/" ,async (request,response,next) => {

    let userRegister=request.body;
    userRegister.userType = 'Customer';

    console.log(userRegister)
    try {
        await usersLogic.addUser(userRegister);
        response.json();
       

    } 
    catch (error) {
       return next(error)
    }
});

router.post("/login" , async (request ,response ,next) =>{

    let userLogin= request.body;
 try {
    let successFullLogin =await usersLogic.login(userLogin);
    response.json(successFullLogin);
 }
 catch (error){
 return next(error)
 }
})

router.get("/forgotPassword/:userName" , async (request ,response ,next) =>{

    let userName= request.params.userName;
 try {
 let user=  await usersLogic.forgotPassword(userName);
    response.json(user);
 }
 catch (error){
 return next(error)
 }
})

router.get("/resetPassword/" , async (request ,response ,next) =>{

   let token= request.query.token;
   console.log(token)
try {

   let isTokenValid = await usersLogic.passwordCheck(token);
   console.log(isTokenValid)
   response.json(isTokenValid);
   
}
catch (error){
return next(error)
}
})

router.put("/updatePassword" , async (request ,response ,next) =>{

   let password= request.body.password;
   
try {

    await usersLogic.updatePassword(password);
   
   response.json();
}
catch (error){
return next(error)
}
})




 module.exports=router;