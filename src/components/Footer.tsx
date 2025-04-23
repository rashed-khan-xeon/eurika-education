// components/Footer.tsx
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {

  const logo = "/images/eurikalogolarge.png"

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Brand / Description */}
        <div>
          <Image
            src={logo}
            alt={"Eurika Education"}
            width={200}
            height={100}
          />
          {/* <h3 className="text-xl font-bold mb-2">Eurika Education</h3> */}
          <p className="text-sm text-gray-400">Your trusted partner in global education visa services.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/eurikaeducation" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-gray-300 hover:text-white transition text-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-300 hover:text-white transition text-lg" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-gray-300 hover:text-white transition text-lg" />
            </a>
            <a href="https://wa.me/01627166238?text=Hi%2C%20I%27m%20interested%20in%20visa%20consultation" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-gray-300 hover:text-white transition text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/visa-success" className="hover:text-white">Visa Success</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Dhaka Office</h4>
          <address className="not-italic text-sm text-gray-300 leading-relaxed">
            Eurika Education<br />
            3rd Floor, 123/6 East Monipur,<br />
            Mirpur-2, Dhaka - 1216<br />
            Bangladesh<br />
            <a href="tel:+8801627166238">
              📞 +880 1627-166238
            </a>
          </address>
        </div>

        {/* Address Portugal */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Portugal Office</h4>
          <address className="not-italic text-sm text-gray-300 leading-relaxed">
            Eurika Education<br />
            Porto<br />
            Portugal<br />
            <a href="tel:+8801627166238">
              📞 +351 920 682 186
            </a>
          </address>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Eurika Education. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
