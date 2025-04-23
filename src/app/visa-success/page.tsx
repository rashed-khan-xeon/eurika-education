// app/visa-success/page.tsx

import Image from 'next/image';

const visaSuccessData = [
    {
        name: 'Aarav Mehta',
        country: 'Italy',
        image: '/images/success/p1.jpg',
        quote: 'EduVisaPro made my dream to study in Canada a reality!',
    },
    {
        name: 'Sneha Reddy',
        country: 'Portugal',
        image: '/images/success/p2.jpg',
        quote: 'Seamless process and great support. Highly recommend!',
    },
    {
        name: 'Rohan Sharma',
        country: 'Luxemberg',
        image: '/images/success/p3.jpg',
        quote: 'Visa approved in just 2 weeks! Thank you team!',
    },
];

const VisaSuccessPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Visa Success Stories</h1>

            <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {visaSuccessData.map((student, index) => (
                    <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center">
                        <Image
                            src={student.image}
                            alt={student.name}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                            <p className="text-blue-600 text-sm">{student.country}</p>
                            <p className="text-gray-600 text-sm mt-2 italic">“{student.quote}”</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisaSuccessPage;
