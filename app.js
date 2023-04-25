import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

const transport = nodemailer.createTransport({
    service: 'gmail',
    port : 587,
    auth: {
        user: 'optimaxrecovery@gmail.com',
        pass: 'ujafjrdmrguzqgjv'
    }
})

const transportMailtrap = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "69889e0d0b70f3",
        pass: "58c1229fc9cd0c"
    }
});

const mails = ["felipevillegas81@gmail.com", "optimaxrecovery@gmail.com"]


app.get('/mail', async (req, res) => {
    const result = await transportMailtrap.sendMail({
        from: 'optimaxrecovery@gmail.com',
        to: mails,
        subject: 'Prueba Envio Mail',
        html: `
            <div>
                <h1>Prueba Envio Mail</h1>
                <img src="cid:prueba_1" />
            </div>
        `,
        attachments: [
            {
                filename: 'prueba_1.jpg',
                path: './img/img1.jpg',
                cid: 'prueba_1'
            },

            {
                filename: 'prueba_2.jpg',
                path: './img/img2.jpg',
                cid: 'prueba_2'
            }
    ]
    })

    res.json({ result } )
})

app.listen(3000, console.log('Server listening on port 3000'))