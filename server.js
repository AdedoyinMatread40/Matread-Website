require('dotenv').config();
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');


const cors = require('cors');
const { body, validationResult } = require('express-validator');

if(cluster.isMaster)
{
    const numCPUs = os.cpus().length;

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        cluster.fork(); // Restart a new worker when one dies
    });

} else
{
    const app = express();

    const allowedOrigins = [
        'http://localhost:3000',
        'http://www.matreadcare.com'
    ];

    const corsOptions = {
        origin: function(origin, callback){
            if(allowedOrigins.includes(origin) || !origin){
                callback(null, true);
            } else{
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json());

    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"], // Default rule for all sources
                scriptSrc: ["'self'", "https://apis.google.com"], // Allow scripts from these domains
                styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"], // Allow styles from Google Fonts and inline styles
                imgSrc: ["'self'", "http://www.matreadcare.com"], // Allow images from your domain
                connectSrc: ["'self'", "https://api.your-domain.com"], // Allow connections to your API
                fontSrc: ["'self'", "https://fonts.gstatic.com"], // Allow fonts from Google Fonts
                objectSrc: ["'none'"], // Prevents object embeds (like Flash)
                mediaSrc: ["'self'"], // Allow media from your own domain
                frameSrc: ["'none'"] // Deny iframes
            },
            reportOnly: false // Set to true to only report violations without enforcing the policy
        }
    }));

    const upload = multer({
        //storage: storage,
        limits: { fileSize: 1000000 }, // limit file size to 1MB
        fileFilter: function(req, file, cb) {
            checkFileType(file, cb);
        }
    });

    // Check File Type
    function checkFileType(file, cb) {
        // Allowed ext
        const filetypes = /jpeg|jpg|png|pdf/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }

    //create another HTTP REQUEST for server for sending a career form, maybe called /sendCareerForm

    app.post('/send', [
        body('name').trim().escape().isLength({ min: 1 }).withMessage('Name is required.'),
        body('email').isEmail().withMessage('Invalid email format.').normalizeEmail()
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, message } = req.body;
        console.log("Sending message to company...");
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
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
        console.log("Ok, message sent, plus a modification to checking message");
    });

    app.post('/send-form', upload.single("file"), [
        body('name').trim().escape().isLength({ min: 1 }).withMessage('Name is required.'),
        body('email').isEmail().withMessage('Invalid email format.').normalizeEmail(),
        body('address').trim().escape().isLength({ min: 1 }).withMessage('Address cannot be empty.'),
        body('phone').trim().escape().matches(/^\d{10}$/).withMessage('Phone number must be 10 digits.'),
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log('Received a request to /sendCareerForm');
        const { name, email, address, phone } = req.body;
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
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
            text: `Dear ${name},

                Thank you for submitting your application to Matread Care. We appreciate your interest in joining our team. Your application is currently under review. 
                If your qualifications and experience are a good fit for the role, we will contact you to discuss the next steps in the selection process.  

                

                Best regards, 
                Matread Care Recruiting`
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


}