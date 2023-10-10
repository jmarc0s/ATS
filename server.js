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
      user: 'api.bookstore11@gmail.com', 
      pass: 'mlegmjybjouygibz', 
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
