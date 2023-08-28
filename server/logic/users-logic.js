let usersDal = require('../dal/users-dal');
const ErrorTypes = require('../errors/errors-types');
const ServerException = require('../errors/server-exception');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json');
const nodemailer = require('nodemailer');


let currentPassword = new Set();
let userDetails = new Set();



async function addUser(userRegister) {
  validateUser(userRegister);

  await usersDal.addUser(userRegister);
}

async function login(userLogin) {

  let userData = await usersDal.login(userLogin);
  console.log(userData)
  if (!userData) {
    throw new Error("Login failed");
  }

  const token = jwt.sign({
    userId: userData.id, userType: userData.userType, firstName: userData.firstName,
    lastName: userData.lastName
  }, config.secret);
  let successfulLogin = { token };
  return successfulLogin;
}

async function forgotPassword(userName) {

  let user = await usersDal.forgotPassword(userName)
  userDetails.add(user);

  console.log(user.user_name)


  if (!user) {
    throw new ServerException(ErrorTypes.USER_NAME_ALREADY_EXIST, "user name already exist")
  }
  else {
    sendEmail(user)
  }

  return user
}

function sendEmail(user) {


  let token = createToken(user);
  // const encodedToken = encodeURIComponent(token);
  const linkHtml = `<a href="http://localhost:3000/resetPassword?token=${token}" style="display: inline-block;
   padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>`;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'c130995@gmail.com',
      pass: 'zckvcnkvztvpotud'

    }
  });

  let mailOptions = {
    from: 'c130995@gmail.com',
    to: user.user_name,
    subject: 'Sending Email using Node.js',
    html: linkHtml

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



function createToken(user) {
  // let tokenToSend = jwt.sign({ userId: user.userId, userName: user.userName }, config.secret, jwtExpirySeconds = 300);
  const tokenToSend = jwt.sign(
    { userId: user.userId, userName: user.userName },
    config.secret,
    { expiresIn: '2m' }
  );
  currentPassword.add(tokenToSend);

  return tokenToSend;
}


function passwordCheck(token) {
  try {
    const decodedToken = jwt.verify(token, config.secret);

    console.log('Token is valid:', decodedToken);

    if (currentPassword.has(token)) {
      return true;
      console.log(true)
    } else {
      return false;
    }
  } catch (error) {
    return ('Token is invalid:', error.message);
  }
}


async function updatePassword(password) {
  
  userDetails.forEach(async (user) => {

    await usersDal.updatePassword(password, user.id);
  });


}





function validateUser(userRegister) {
  validateUserName(userRegister.userName)
}


function validateUserName(userName) {
  if (!userName) {
    throw new ServerException(ErrorTypes.USER_NAME_IS_NULL, "user name is null")
  }


}
module.exports = {
  addUser,
  login,
  forgotPassword,
  passwordCheck,
  updatePassword

};