// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          <div className="flex gap-2 items-center">
            <div>
              <Image
                src={"/images/euredu.png"}
                alt={"Eurika Education"}
                width={100}
                height={50}
                className="w-full h-8 object-cover"
              />
            </div>
            <div>
              <span className="text-[#192e67]">Eurika</span> <span className="text-[#f2952c]">Education</span>
            </div>
          </div>
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>
        <Link
          href="/apply"
          className="bg-[#192e67] text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#192e67] transition"
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
