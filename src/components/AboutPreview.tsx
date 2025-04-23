const AboutPreview = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-lg mb-6">
                    With a 95% success rate and hundreds of happy students globally, we bring expertise,
                    personalized support, and peace of mind to your education visa journey.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">University Selection</h3>
                        <p className="text-gray-600 text-sm">Personalized shortlisting based on your goals and eligibility.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Visa Guidance</h3>
                        <p className="text-gray-600 text-sm">End-to-end support for your student visa documentation and interview prep.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">SOP & Document Review</h3>
                        <p className="text-gray-600 text-sm">We help polish your Statement of Purpose and review all necessary paperwork.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
