'use client';

import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import Chip from './Chip';
import { FaArrowRight, FaClock, FaEuroSign } from 'react-icons/fa';

type Package = {
    title: string;
    tag?: string;
    image: string;
    points: string[];
    details: string;
    ielts: boolean;
    tutionFee: string;
    deadLine: string;
};

const PackageCard = ({ pkg }: { pkg: Package }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-left"  >
                <div className="relative">
                    <Image
                        src={pkg.image}
                        alt={pkg.title}
                        width={400}
                        height={250}
                        className="w-full h-56 object-cover"
                    />
                    {pkg.tag && (
                        <div className="absolute top-3 left-3">
                            <Chip label={pkg.tag} className='font-bold py-2 px-4' color={pkg.ielts ? "red" : "green"} />
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-3 mt-2 text-blue-400">{pkg.title}</h3>
                    <div className='flex items-center text-slate-600 space-x-2'>
                        <FaEuroSign size={16} />
                        <p>{pkg.tutionFee}</p>
                    </div>
                    <div className='flex items-center mt-2 text-slate-600  space-x-2'>
                        <FaClock size={16} />
                        <p>{pkg.deadLine}</p>
                    </div>
                </div>
                <p
                    onClick={() => setIsOpen(true)}
                    className='cursor-pointer px-3 py-1 text-sm text-end'>More...</p>
            </div>

            {/* Modal for Package Details */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={pkg.title}>
                <p className="text-gray-700 mb-2">{pkg.details}</p>
                <div className='flex gap-2'>
                    <div>
                        <Image
                            src={pkg.image}
                            alt={pkg.title}
                            width={400}
                            height={250}
                            className="w-full h-56 object-cover rounded-sm"
                        />
                        <div className="pe-4 py-2 text-start">
                            <div className='flex items-center text-slate-600 space-x-2'>
                                <FaEuroSign size={16} />
                                <p className='text-sm'>{pkg.tutionFee}</p>
                            </div>
                            <div className='flex items-center mt-2 text-slate-600  space-x-2'>
                                <FaClock size={16} />
                                <p className='text-sm'>{pkg.deadLine}</p>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/+351920682186?text=Hi%2C%20I%27m%20interested%20in%20visa%20consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-2 text-center inline-block bg-green-500 text-white text-sm font-semibold px-2 py-2 rounded-sm shadow hover:bg-[#f2952c] transition"
                        >
                            💬 Chat
                        </a>
                    </div>
                    <div>
                        <ul className="list-none list-inside text-start text-sm text-gray-600">
                            {pkg.points.map((point, i) => (
                                <li className='flex border-[1px] my-1 px-1 py-2 rounded hover:bg-slate-100 border-slate-300 items-center text-sm capitalize' key={i}><FaArrowRight size={16} /> <span className='px-2'>{point}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default PackageCard;
