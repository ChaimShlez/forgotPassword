const connection = require('./connection-wrapper');



async function addUser (userRegister){
    let sql =`insert into users(user_name,password, user_type,first_name,last_name)` +
    `values(?,?,?,?,?)`;
   
    let parameters =[userRegister.userName, userRegister.password,userRegister.userType,
    userRegister.firstName, userRegister.lastName];
    
    await connection.executeWithParameters(sql, parameters);
}

async function login(user) {
    let sql = `SELECT id, user_type as userType, first_name as firstName, last_name as lastName 
              from users where user_name = ? and password = ?`;
    let parameters = [user.userName, user.password];
    
    let [userData] = await connection.executeWithParameters(sql, parameters);   
    
    if (!userData){
        return null;
    }

    return userData;
}

async function forgotPassword(userName){
    let sql ='SELECT id , user_name  from users where user_name = ?'
    let parameters =[userName]
     const [user] =await connection.executeWithParameters(sql,parameters)
   
     if (!user){
        return null
     }
     return user
}

async function updatePassword(password ,id){
   
   console.log(id)
   
    let sql =`update users set password=? where id = ?` ;
    
   
    let parameters =[password,id];
    console.log(parameters)
   
    
    await connection.executeWithParameters(sql, parameters);

}


module.exports = {
    addUser,
     login,
     forgotPassword,
     updatePassword
};