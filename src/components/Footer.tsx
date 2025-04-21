// components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-100 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold text-blue-600 mb-2">Eurika Education</p>
          <p className="text-gray-600">© {new Date().getFullYear()} Eurika Education. All rights reserved.</p>
          <div className="mt-4 space-x-4 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  