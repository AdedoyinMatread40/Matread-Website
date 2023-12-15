require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer();

app.use(cors());
app.use(bodyParser.json());

//create another HTTP REQUEST for server for sending a career form, maybe called /sendCareerForm

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: 'Contact Form Submission',
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
          `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email succesfully sent');
    } catch (error) {
        console.error('Error sending the mail', error);
        res.status(500).send('Server error');
    }
});

app.post('/send-form', upload.single("file"), async (req, res) => {
    console.log('Received a request to /sendCareerForm');
    console.log('Request body:', req.body);
    const { name, email, address, phone } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },

    });

    const file = req.file;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Career form for ${name}`,
        html: `<p>Name: ${name} </p> <p>Email: ${email}</p> <p>Address: ${address}</p> <p>Phone: ${phone}</p>`,
        attachments: file ? [{filename: file.originalname, content: file.buffer}] 
        : [],
    };
    const mailOptions2 = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Application Successfully Submitted`,
        text: `Dear ${name}
        Thank you for submitting your application to Matread Care. We appreciate your interest in joining our team. Your application is currently under review. 
        If your qualifications and experience are a good fit for the role, we will contact you to discuss the next steps in the selection process.  


        

        Best regards, 
        Matread Care Recruiting,`
    };



    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions2);
        res.status(200).send('Email succesfully sent');
    
    } catch (error) {
        console.error('Error sending the mail', error);
        res.status(500).send('Server error');
    }


}


);

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});