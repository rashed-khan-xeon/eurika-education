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
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl max-w-lg w-full shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Get in Touch</h2>
                    <ContactForm />
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
        <section className="py-16 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
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