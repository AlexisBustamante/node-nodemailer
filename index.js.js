const nodemailer = require("nodemailer");
const send = async ()=>{

 // create reusable transporter object using the default SMTP transport
 const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'enrique26@ethereal.email',
        pass: 'aNnmhvpMMESN1yhTBr'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'enrique26@ethereal.email', // sender address
    to: "enrique26@ethereal.email", // list of receivers
    subject: "Este es una prueba desde node con ASYNC", // Subject line
    text: "Hola santi", // plain text body
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
    console.log('Esperando.../ segundos trancurridos:',count);
}


enviar = async () => { 
    console.log('Enviando correo...');
    console.log('espera por favor...');
    let count = 0;
    let  idInterval = setInterval(timer,1000);
    await send();
    clearInterval(idInterval);
    console.log('Correo enviado correctamente...');

}

enviar();
