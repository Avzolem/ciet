//contact ROUTE
import nc from "next-connect";
import ncoptions from "@/config/ncoptions";
import axios from "axios";
const nodemailer = require("nodemailer");
import Sheet from "@/lib/Spreadsheet";
const sheetId = process.env.GOOGLE_SHEET_ID;
const submissionsSheetIndex = 0;

const handler = nc(ncoptions);

// MIDDLEWARE;
handler.use(async (req, res, next) => {
    next();
});

handler.post(async (req, res) => {
    const { data } = req.body;

    const { firstName, lastName, email, phone, empresa, message } = data;

    try {
        //send data to google sheets
        const sheet = new Sheet(sheetId);
        await sheet.load();

        await sheet.addRows(
            [
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    empresa,
                    message,
                },
            ],
            submissionsSheetIndex
        );

        //send parsedData to email
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const template = `
          <p><strong>Nombre</strong>: ${firstName}</p>
          </br>
          <p><strong>Apellido</strong>: ${lastName}</p>
          </br>
          <p><strong>Email</strong>: ${email}</p>
          </br>
          <p><strong>Telefono</strong>: ${phone}</p>
          </br>
          <p><strong>Empresa</strong>: ${empresa}</p>
          </br>
          <p><strong>Mensaje</strong>: ${message}</p>
          </br>
    
        `;

        await transporter.sendMail({
            from: "hybrida@uach.mx", // sender address
            to: "hybrida@uach.mx", // list of receivers
            subject: "Nuevo Registro Contacto CIET ✔", // Subject line
            html: template,
        });

        res.status(200).json({ message: "success" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});

export default handler;
