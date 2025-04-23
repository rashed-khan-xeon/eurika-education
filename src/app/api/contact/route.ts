// app/api/contact/route.ts

import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    console.log("Sending email")
    const { name, email, message } = await request.json();
    try {
        await sendSimpleMessage(name, email, message)
        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

async function sendSimpleMessage(name: any, email: any, message: any) {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: process.env.API_KEY || "API_KEY",
        // When you have an EU-domain, you must specify the endpoint:
        // url: "https://api.eu.mailgun.net"
    });
    try {
        const data = await mg.messages.create("mail.eurikaeducation.com", {
            from: "Mailgun Sandbox <postmaster@mail.eurikaeducation.com>",
            to: ["Rashed Khan <contact@eurikaeducation.com>"],
            subject: "Hello Rashed Khan",
            text: "Congratulations Rashed Khan, you just sent an email with Mailgun! You are truly awesome!",
        });

        console.log(data); // logs response data
    } catch (error) {
        console.log(error); //logs any error
    }
}