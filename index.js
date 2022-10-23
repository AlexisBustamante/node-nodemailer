const nodemailer = require("nodemailer");
const send = async ()=>{
const { config } = require('./config/config');
  // create reusable transporter object using the default SMTP transport
 //el host es cambiado a gmail, para enviar a gmail.
 const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.usrEmail,
        pass: config.usrPass
        }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'alexisbustamantecisternas@gmail.com', // sender address
    to: "alexisbustamantecisternas@gmail.com", // list of receivers
    subject: "Prueba desde NODE", // Subject line
    text: "Hola ALEXIS", // plain text body
    html: "<b>este es el mensaje que queria enviar desde mi aplicacion en node js </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

let count=0;
const timer = ()=>{
    count++
}

enviar = async () => { 
    console.log('Enviando correo a desde servidor smtp.gmail.com ...');
    console.log('espera por favor...');
    let  idInterval = setInterval(timer,1000);
    await send();
    clearInterval(idInterval);
    console.log('La petición demoró ',count,' segundos');
    console.log('Correo enviado correctamente...');

}

enviar();
