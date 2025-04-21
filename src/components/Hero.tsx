const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    Your Gateway to Global Education
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    We simplify your education visa process and help you pursue your dreams abroad.
                </p>
                <a
                    href="/apply"
                    className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition"
                >
                    Start Your Application
                </a>
            </div>
        </section>
    );
};

export default Hero;
