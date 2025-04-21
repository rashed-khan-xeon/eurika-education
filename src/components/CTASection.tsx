const CTASection = () => {
    return (
        <section className="py-20 px-6 bg-indigo-700 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Study Abroad?
            </h2>
            <p className="text-lg mb-8">
                Let's simplify your visa process. Get expert help now.
            </p>
            <a
                href="/apply"
                className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition"
            >
                Get a Free Consultation
            </a>
        </section>
    );
};

export default CTASection;
