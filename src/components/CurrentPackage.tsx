// components/CurrentPackage.tsx 
import PackageCard from './PackageCard';




const packages = [
  {
    title: 'Portugal',
    image: '/images/portugal.jpg',
    ielts: false,
    tutionFee: "2000 - 6000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(8.5/9) lakh taka all includes except air ticket',
      'Without IELTS',
      'Affordable tuition fees',
      'Study gaps acceptable ',
      'Low cost of living ',
      'Job opportunities',
      'Spouse allowed after three months',
      'Passport can be obtained within three to five years',
      'Quickly settled',
      'Study time countable for passport',
      'All public universities',
      'Scholarship available',
      'Schengen Country',
    ],
  },
  {
    title: 'Spain',
    image: '/images/spain.avif',
    ielts: false,
    tutionFee: "1500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(7/7.5) lakh taka all includes except air ticket',
      'Without IELTS ',
      'Low cost of living', 
      'Apply for residency after study',
      'Job opportunity',
      'All public universities',
      'Scholarship available',
      'Schengen Country',
    ],
  },
  {
    title: 'Hungary',
    image: '/images/hungary.jpg',
    ielts: false,
    features: [
      '(8.6/9) lakh taka all includes except air ticket',
      'No Need to Go India',
      'Easy Admission Process',
      'Affordable Tuition fee',
      'Almost 90% visa Ratio',
      'Study Gap Accepted',
      'Highest Earning Country',
      'Without IELTS',
      'Credit can be transferred to Germany',
      'All public universities',
      'Scholarship available',
      'Schengen Country'
    ],
    tutionFee: "2500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September(2025) intake",
  },
  {
    title: 'Italy',
    image: '/images/italy.jpg',
    ielts: false,
    features: [
      '(5/6) lakh taka all includes except air ticket',
      'Admission without IELTS (conditions apply)',
      'Low cost of living',
      'Job opportunity',
      'All public universities',
      'Scholarship Available',
      'Settle after study',
      'Highest income country',
    ],
    tutionFee: "500 - 1500 Euro tuition fees per year",
    deadLine: "January to July for September intake",
  },
  {
    title: 'Bulgaria',
    image: '/images/bulgaria.png',
    ielts: false,
    features: [
      '(5/6) lakh taka all includes except air ticket',
      'Schengen Country',
      'Without IELTS',
      'Low cost of living',
      'All public universities',
      'Scholarship available',
      'Job opportunities',
      'Study gap acceptable'
    ],
    tutionFee: "1200 - 3000 Euro tuition fees per year",
    deadLine: " January to July for September intake",
  },
  {
    title: 'Czech Republic',
    image: '/images/czech.jpg',
    ielts: false,
    features: [
      '(8/9) lakh taka all includes except air ticket',
      'Without IELTS',
      'Low cost of living',
      'Transfer from student permit to work permit',
      'World-renowned university',
      'Wide program options',
      'Cultural diversity',
      'All public universities ',
      'Scholarship available ',
      'Settle after study',
      'Schengen Country',
    ],
    tutionFee: "1500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
  },
  {
    title: 'Iceland',
    ielts: true,
    image: '/images/iceland.avif',
    tutionFee: "2500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(8.5/9) lakh taka all includes except air ticket',
      'Easy Admission Process',
      'Affordable Tuition fee',
      'Almost 90% visa Ratio',
      'Study Gap Accepted',
      'IELTS 6++',
      'All public universities',
      'Settle after study',
      'Job opportunity',
      'Scholarship  available',
      'Highest income country',
    ],
  },
  {
    title: 'Lithuania',
    ielts: true,
    image: '/images/lithuania.avif',
    tutionFee: "2000 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(7.5/8) lakh taka all includes except air ticket',
      'Easy Admission Process',
      'Affordable Tuition fee',
      'Good Success Ratio',
      'Study Gap Accepted',
      'Without IELTS',
      'All public universities',
      'Scholarship available',
      'Settle after study',
      'Spouse allowed (conditions)'
    ],
  },
  {
    title: 'Norway',
    image: '/images/norway.jpeg',
    ielts: true,
    features: [
      'Easy Admission Process',
      'Affordable Tuition Fee',
      'Study Gap Accepted',
      'IELTS 6+',
      'All public universities',
      'Scholarship available',
      'Job opportunity',
      'Highest income country',
      'Settle after study'
    ],
    tutionFee: "2000- 14000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
  },
  {
    title: 'Denmark',
    image: '/images/denmark.jpg',
    ielts: true,
    features: [
      'Easy Admission Process',
      'Study Gap Accepted',
      'IELTS 6.5+ ',
      'All public universities',
      'Scholarship available ',
      'Spouse allowed',
      'Job opportunity',
      'Settle after study',
      'Highest income country'
    ],
    tutionFee: "6000 - 12000 Euro tuition fees per year",
    deadLine: "January to July for September intake",

  },
  {
    title: 'Netherlands',
    image: '/images/netherlands.jpg',
    ielts: true,
    tutionFee: "2000 - 14000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      'Easy Admission Process',
      'Study Gap Accepted ',
      'IELTS 6/6.5+',
      'All public universities',
      'Scholarship available ',
      '𝗡𝗼 𝗡𝗲𝗲𝗱 𝘁𝗼 𝗚𝗼 𝗜𝗻𝗱𝗶𝗮 ',
      'All include except air tickets',
      'Highest income country',
      'Job opportunity',
      'Settle after study'
    ],
  },
  {
    title: 'Poland',
    image: '/images/poland.avif',
    ielts: false,
    tutionFee: "1800 - 4500 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(8/9) lakh taka all includes except air ticket',
      'Easy Admission Process',
      'Affordable Tuition fee',
      'Good Success Ratio',
      'Study Gap Accepted',
      'Without IELTS',
      'All public universities', 
      'Scholarship available'
    ],
  },
  {
    title: 'Slovakia',
    image: '/images/slovakia.jpg',
    ielts: false,
    tutionFee: "500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(7.5/8.5) lakh taka all includes except air ticket',
      'IELTS 5.5',
      'Low cost of living',
      'World-renowned university',
      'Wide program options',
      'Cultural diversity',
      'All public universities', 
      'Scholarship available'
    ],
  },
  {
    title: 'Slovenia',
    image: '/images/solvenia.avif',
    ielts: true,
    tutionFee: "500 - 4000 Euro tuition fees per year",
    deadLine: "January to July for September intake",
    features: [
      '(8/9) lakh taka all includes except air ticket',
      'IELTS 5.5',
      'Low cost of living',
      'World-renowned university',
      'Wide program options',
      'Cultural diversity',
      'All public universities', 
      'Scholarship available'
    ],
  }
];

const CurrentPackage = () => {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
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
