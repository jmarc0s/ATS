
// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname)));

// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });


// const nodemailer = require('nodemailer');

// const enviarEmail = async () => {
// // Configurações para o Gmail SMTP
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//     user: 'api.bookstore11@gmail.com',
//     pass: 'mlegmjybjouygibz',
//     },
// });

// const mailOptions = {
//     from: 'api.bookstore11@gmail.com',
//     to: 'joaomarcoscacula88@gmail.com',
//     subject: 'Assunto do E-mail',
//     text: 'Corpo do E-mail em texto simples',
//     html: '<p>Corpo do E-mail em HTML</p>',
// };

// try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('E-mail enviado com sucesso:', info.response);
// } catch (error) {
//     console.error('Erro ao enviar o e-mail:', error);
// }
// };


const express = require('express');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
app.use(cors()); 

app.use(express.json());

app.post('/enviar-email', async (req, res) => {
  const { destinatario, assunto, corpo } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'api.bookstore11@gmail.com', // Substitua pelo seu e-mail
      pass: 'mlegmjybjouygibz', // Substitua pela sua senha do e-mail
    },
  });

  const mailOptions = {
    from: 'api.bookstore11@gmail.com',
    to: destinatario,
    subject: assunto,
    text: corpo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso:', info.response);
    res.status(200).send('E-mail enviado com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).send('Erro ao enviar o e-mail.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
