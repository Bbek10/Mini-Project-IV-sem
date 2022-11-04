require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SGI_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env;

sgMail.setApiKey(SGI_API_KEY);

export default async function handler(req, res) {
  const { name, newEmail } = req.body;

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "Email For your order with Sayami",
    html: `<p> Hey yaa <strong>
            ${name},</strong> We are glad to be part of your life. Your Food will be delivered shortly. 
            Use your copied OrderID to track your food preparation and delivery.

            </p>
            <p> 
            We are more than happy to include you as our customer 
            <strong>
            ${newEmail}
            </strong>
            <br>
            -Sayami</p>`,
  };
  await sgMail.send(msg);
  res.json({ success: true });
}
