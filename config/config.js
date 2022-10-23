require('dotenv').config();

const config = {
    usrEmail:process.env.USR_EMAIL,
    usrPass:process.env.USER_PASSWORD_APP
}

module.exports = { config };