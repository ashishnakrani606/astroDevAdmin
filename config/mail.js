import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
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
    from: process.env.NEXT_PUBLIC_EMAIL_FROM,
    to: to,
    subject: subject,
    html: html,
  });
  return info?.messageId;
};
