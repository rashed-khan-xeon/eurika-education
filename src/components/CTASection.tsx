const CTASection = () => {
    return (
        <section className="py-20 px-6 bg-indigo-700 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Study Abroad?
            </h2>
            <p className="text-lg mb-8">
                Lets simplify your visa process. Get expert help now.
            </p>
            {/* <a
                href="/consultation"
                className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition"
            >
                Get a Free Consultation
            </a> */}
            <a
                href="https://wa.me/+351920682186?text=Hi%2C%20I%27m%20interested%20in%20visa%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-600 transition"
            >
                💬 Message Us on WhatsApp
            </a>
        </section>
    );
};

export default CTASection;
