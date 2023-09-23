import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ValidationError } from "yup";
import { contactEmailTemplate } from "../../template/contactEmail";
import { contactSchema } from "../../validation/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, receipt } = await contactSchema.validate(
      body,
    );

    await resend.emails.send({
      from: "hello@li-moshi.com",
      to: "li.moshi@outlook.com",
      subject: "Hello World",
      html: `<p>${name}<br>${email}<br/>Send you a message: <br/> ${message}</p>`,
    });

    if (receipt) {
      await resend.emails.send({
        from: "hello@li-moshi.com",
        to: email,
        subject: "Hi from li-moshi.com",
        react: contactEmailTemplate({ messageContent: message }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    if (e instanceof ValidationError)
      return NextResponse.json(e, { status: 400 });
    return NextResponse.json(
      new Error("unknown error check server for more information"),
      { status: 400 },
    );
  }
}
