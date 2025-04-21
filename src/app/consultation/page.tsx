// app/contact/page.tsx

export default function Consultation() {
    return (
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Let’s Chat on WhatsApp</h1>
        <p className="mb-8 text-gray-600">
          Tap the button below and we’ll respond within a few minutes.
        </p>
        <a
          href="https://wa.me/15551234567?text=Hi%2C%20I%27m%20interested%20in%20visa%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-600 transition"
        >
          💬 Message Us on WhatsApp
        </a>
      </section>
    );
  }
  