import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// * To send the email
export const sendEmail = async (
  to,
  subject,
  html
) => {
  console.log("send mail" , to, html);
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: to,
    subject: subject,
    html: html,
  });
  return info?.messageId;
};
