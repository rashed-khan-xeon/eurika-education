// app/contact/page.tsx

export default function ContactPage() {
    return (
        <section className="py-16 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <form
                action="https://formspree.io/f/{your-form-id}"
                method="POST"
                className="space-y-6 bg-white p-6 rounded-xl shadow"
            >
                <div>
                    <label className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-gray-300 p-3 rounded-xl"
                    />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        required
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
