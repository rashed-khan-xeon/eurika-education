// app/contact/page.tsx
"use client"
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
    return (
        <div className="relative w-full h-screen bg-gray-900">
            {/* Background Image */}
            <Image
                src="/images/contact.jpg"
                alt="Contact background"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
                priority
            />

            {/* Overlay Content */}
            <div className="absolute max-w-7xl mx-auto inset-0 flex-col items-center justify-center pt-24">
                <div className="rounded-xl p-4 bg-white/90 backdrop-blur-sm">
                    <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
                    <div className="flex w-full gap-2">

                        <ContactForm />

                        <iframe
                            className="rounded-md"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.15550257128967!2d90.3709626!3d23.8012385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c167b0886a37%3A0xe1776f8607b8a779!2sEurika%20Education!5e0!3m2!1sen!2sbd!4v1747250283581!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );

}


function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setStatus('Message sent!');
            setForm({ name: '', email: '', message: '' });
        } else {
            setStatus('Failed to send message.');
        }
    };


    return (
        <section className="w-full mx-auto">
            <form
                onSubmit={handleSubmit}
                method="POST"
                className="space-y-6 bg-white p-6 rounded-xl shadow"
            >
                <div>
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                </div>
                <p>{status}</p>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}