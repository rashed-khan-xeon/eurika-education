const services = [
    {
      title: "Student Visa",
      description: "Complete guidance for student visa applications to the UK, Canada and more.",
    },
    {
      title: "Document Preparation",
      description: "We help you prepare your financial, academic, and identity documents.",
    },
    {
      title: "Interview Coaching",
      description: "Mock interviews and prep to help you feel confident for embassy interviews.",
    },
  ];
  
  const Services = () => {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  