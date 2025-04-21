// components/Footer.tsx

// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Brand / Logo */}
        <div>
          <h3 className="text-xl font-bold mb-2">Eurika Education</h3>
          <p className="text-sm text-gray-400">Your trusted partner in global education visa services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/apply" className="hover:text-white">Apply Now</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Office Address</h4>
          <address className="not-italic text-sm text-gray-300 leading-relaxed">
            Eurika Education<br />
            3rd Floor, 123/6 East Monipur,<br />
            Mirpur-2, Dhaka - 1216<br />
            Bangladesh<br />
            <a href="tel:+8801660128009">
              📞 +880-166012-8009
            </a>
          </address>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} EduVisaPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

