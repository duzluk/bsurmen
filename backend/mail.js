const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
const { Thanks } = require("./thanks_template");

const getEmailData = (to, name, template) => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from: "Burak Sürmen <busurmen@gmail.com",
        to,
        subject: `Hello ${name}`,
        html: Hello()
      };
      break;
    case "thanks":
      data = {
        from: "Burak Sürmen <busurmen@gmail.com",
        to,
        subject: `Hello  ${name}`,
        html: Thanks()
      };
    default:
      data;
  }
  return data;
};

const sendEmail = (to, name, type) => {
  console.log("sendEmail");
  
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "busurmen@gmail.com",
      pass: "hebelehubele'92"
    }
  });

  const mail = getEmailData(to, name, type);

  smtpTransport.sendEmail(mail, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent succesfully");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
