// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEMail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message} = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEMail,
      to: ["philipp.guschl@gmx.de", email],
      subject: subject,
      react: <>
      <h1>{subject}</h1>
      <p>Danke für deine Nachricht!</p>
      <p>New messaged submitted:</p>
      <p>{message}</p>
      </>
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}