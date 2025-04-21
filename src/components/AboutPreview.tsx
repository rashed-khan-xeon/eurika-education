const AboutPreview = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-lg mb-6">
                    With a 95% success rate and hundreds of happy students globally, we bring expertise,
                    personalized support, and peace of mind to your education visa journey.
                </p>
                <a
                    href="/about"
                    className="text-blue-600 font-medium underline hover:text-blue-800"
                >
                    Learn more about us →
                </a>
            </div>
        </section>
    );
};

export default AboutPreview;
