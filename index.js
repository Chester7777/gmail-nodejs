const express = require('express');
const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

const port = 3010;

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "es18.03.88@gmail.com", // generated ethereal user
        pass: "qwe123QWE098", // generated ethereal password
    },
});

app.get('/', (req, res) => {
    res.send('Hello')
})
app.post('/sendMessage', async (req, res) => {

    let {message, email, name} = req.body

// send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'HR WANTS ME 👻', // sender address
        to: "es18.03.88@gmail.com", // list of receivers
        subject: "HR WANTS ME", // Subject line
        // text: "Hello", // plain text body
        html: `<b>Сообщение с вашего portfolio page</b> 
            <div> 
name: ${name}
            </div> 
            <div> 
email: ${email}
            </div> 
            <div> 
${message}
            </div>`
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

