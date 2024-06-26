import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "IT Soluce <onboarding@resend.dev>",
      to: ["itsoluce13@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Nouveau message via le site it-soluce.com de {email}.</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
