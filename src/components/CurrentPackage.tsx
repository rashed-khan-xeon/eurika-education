// components/CurrentPackage.tsx

import Image from 'next/image';
import Chip from './Chip';

const packages = [
  {
    title: 'France',
    image: '/images/france.jpg',
    ielts: false,
    features: [
      'Shortlist universities based on profile & budget',
      'Country and program-wise recommendations',
      'Admission success rate estimation',
    ],
  },
  {
    title: 'Portugal',
    image: '/images/portugal.jpg',
    ielts: false,
    features: [
      'Complete document checklist & assistance',
      'Mock interview preparation',
      'Form filling and embassy-specific advice',
    ],
  },
  {
    title: 'Spain',
    image: '/images/spain.png',
    ielts: false,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Hungary',
    image: '/images/hungary.jpg',
    ielts: false,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Italy',
    image: '/images/italy.jpg',
    ielts: false,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Bulgaria',
    image: '/images/bulgaria.png',
    ielts: false,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Czech Republic',
    image: '/images/czech.jpg',
    ielts: false,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Luxembourg',
    ielts: true,
    image: '/images/luxemberg.jpeg',
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Norway',
    image: '/images/norway.jpeg',
    ielts: true,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Denmark',
    image: '/images/denmark.jpg',
    ielts: true,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
  {
    title: 'Netherlands',
    image: '/images/netherlands.jpg',
    ielts: true,
    features: [
      'Statement of Purpose writing & editing',
      'CV & LOR review',
      'Financial document guidance',
    ],
  },
];

const CurrentPackage = () => {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎓 Countries We Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Everything you need for a smooth admission and visa process — bundled into one expert-guided package:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {pkg.ielts ? <Chip label={'IELTS'} color='red' className='cursor-pointer font-bold' /> : <Chip label={"Without IELTS"} color='green' className='cursor-pointer font-bold' />}
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{pkg.title}</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {pkg.features.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentPackage;
