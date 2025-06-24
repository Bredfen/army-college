const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const RECIVE_EMAIL = "irusanov@gmail.com" //почта куда сыпятся заявки
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru', // или smtp.yandex.ru
    port: 465,
    secure: true,
    auth: {
      user: 'collegetransfersite@mail.ru',
      pass: 'obXKPi5W5sP3kdsOlrhB' // генерируется отдельно (не обычный пароль!)
    }
  });


app.use(cors());
app.use(express.json());



app.post('/headform', async (req, res) => {
  const { name, phone, form_type, date } = req.body.formData;

  try {
    await transporter.sendMail({
      from: `"Вестник" <collegetransfersite@mail.ru>`,
      to: RECIVE_EMAIL,
      subject: '🔔Новая заявка с лендинга по продлению отсрочки от армии🔔',
      html: `
      <p><span style="font-family: arial, helvetica, sans-serif; font-size: 18pt;">🔔Новая заявка с лендинга по продлению отсрочки от армии🔔&nbsp;</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📋Данные клиента📋</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">👤Имя: ${name} </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📞Телефон: ${phone}&nbsp;</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">ℹ️ Дополнительная информация: </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">🌀Тип формы: ${form_type}</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📆 Дата и время подачи: ${date}</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 18pt;">Свяжитесь с клиентом в ближайшее время для консультации!</span></p>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.post('/footerform', async (req, res) => {
  console.log(req.body)
  const { name, phone, message, form_type, date } = req.body.formData;

  try {
    await transporter.sendMail({
      from: `"Вестник" <collegetransfersite@mail.ru>`,
      to: RECIVE_EMAIL,
      subject: '🔔Новая заявка с лендинга по продлению отсрочки от армии🔔',
      html: `
      <p><span style="font-family: arial, helvetica, sans-serif; font-size: 18pt;">🔔Новая заявка с лендинга по продлению отсрочки от армии🔔&nbsp;</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📋Данные клиента📋</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">👤Имя: ${name} </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📞Телефон: ${phone} </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">💬Сообщение: ${message} </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">ℹ️ Дополнительная информация: </span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">🌀Тип формы: ${form_type}</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 14pt;">📆 Дата и время подачи: ${date}</span></p>
<p><span style="font-family: arial, helvetica, sans-serif; font-size: 18pt;">Свяжитесь с клиентом в ближайшее время для консультации!</span></p>
      ` 
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => console.log('💌 Сервер запущен на порту 3001'));