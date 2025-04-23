// components/CurrentPackage.tsx 
import PackageCard from './PackageCard';




const packages = [
  {
    title: 'France',
    image: '/images/france.jpg',
    ielts: false,
    tutionFee: "",
    deadLine: "",
    features: [
      '(8/9) lakh taka ',
      'No IELTS',
      'Low cost of living',
      'Eligible for Post Graduate Working Permit.',
      'World-renowned university.',
      'Wide program options.',
      'Cultural diversity',
      'Scholarships and financial aid',
      'Job opportunities'
    ],
  },
  {
    title: 'Portugal',
    image: '/images/portugal.jpg',
    ielts: false,
    tutionFee: "2000-6000 euro per year",
    deadLine: "April to July for September intake",
    features: [
      '(8.5/9) lakh taka',
      'Apply with or without IELTS',
      'Affordable tuition fees',
      'Study gaps acceptable ',
      'Low cost of living ',
      'Job opportunities',
    ],
  },
  {
    title: 'Spain',
    image: '/images/spain.png',
    ielts: false,
    tutionFee: "2000-4000 euro per year",
    deadLine: "April to June for September intake.",
    features: [
      '(7/7.5) lakh taka ',
      'No IELTS',
      'Low cost of living',
      'Eligible for Post Graduate Working Permit',
      '1 year (only) Masters program',
      'Apply for permanent residency for 2 years.',
    ],
  },
  {
    title: 'Hungary',
    image: '/images/hungary.jpg',
    ielts: false,
    features: [
      '(8.6/9) lakh taka',
      'No Need to Go India',
      'Easy Admission Process',
      'Affordable Tuition fee ',
      'Almost 100% Success Ratio ',
      'Study Gap Accepted',
      'Highest Earning Country',
      'No Need IELTS'
    ],
    tutionFee: "2500-4000 euro per year",
    deadLine: "April to July for September intake.",
  },
  {
    title: 'Italy',
    image: '/images/italy.jpg',
    ielts: false,
    features: [
      '( 5/6) lakh taka',
      'Admission without IELTS (conditions apply)',
      '9-month Post Study Work Permit',
      '30 hours part-time work opportunity per week',
      'QS Ranked University',
      'Up to 90% Visa Success Rate',
    ],
    tutionFee: "500-1500 euro per year",
    deadLine: "April to July for September intake",
  },
  {
    title: 'Bulgaria',
    image: '/images/bulgaria.png',
    ielts: false,
    features: [
      '(5/6) lakh taka',
      'It is new Schengen Country',
      'No Need IELTS',
      'We will support you directly through the University for ensuring your highest visa possibility.',
      'You do not need to go India because you can apply your visa application VFS in Dhaka.',
      'Low cost of living',
    ],
    tutionFee: "2000-3000 euro per year",
    deadLine: "April to July for September intake",
  },
  {
    title: 'Czech Republic',
    image: '/images/czech.jpg',
    ielts: false,
    features: [
      'No IELTS test',
      'Low cost of living',
      'Eligible for Post Graduate Working Permit',
      'World-renowned university',
      'Wide program options',
      'Cultural diversity',
    ],
    tutionFee: "1500-4000 euro per year",
    deadLine: "April to July for September intake",
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
            <PackageCard
              key={index}
              pkg={{
                title: pkg.title,
                tag: pkg.ielts ? "IELTS" : "NO IELTS",
                image: pkg.image,
                points: pkg.features,
                details: '',
                ielts: pkg.ielts,
                deadLine: pkg.deadLine || "",
                tutionFee: pkg.tutionFee || ""
              }}
            />
            // <div
            //   key={index}
            //   className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"
            // >
            //   <Image
            //     src={pkg.image}
            //     alt={pkg.title}
            //     width={500}
            //     height={300}
            //     className="w-full h-48 object-cover"
            //   />
            //   <div className="p-6">
            //     {pkg.ielts ? <Chip label={'IELTS'} color='red' className='cursor-pointer font-bold' /> : <Chip label={"Without IELTS"} color='green' className='cursor-pointer font-bold' />}
            //     <h3 className="text-xl font-semibold mb-3 mt-2 text-blue-600">{pkg.title}</h3>
            //     <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            //       {pkg.features.map((point, i) => (
            //         <li key={i}>{point}</li>
            //       ))}
            //     </ul>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentPackage;
