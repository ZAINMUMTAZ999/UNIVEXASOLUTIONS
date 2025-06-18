// components/Footer.tsx
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-500 text-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>

            <span className="text-lg sm:text-xl font-bold text-black">
                <b>
                  Sekai
                  </b>
                Space
              </span>
          <p className="text-sm  text-black">
            Building innovative, scalable digital solutions to empower your startup.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-purple-100">
            <li><Link to="/services/web" className="hover:text-white ">Web Development</Link></li>
            <li><Link to="/services/mobile" className="hover:text-white">Mobile Apps</Link></li>
            <li><Link to="/services/ai" className="hover:text-white">AI Solutions</Link></li>
            <li><Link to="/services/cloud" className="hover:text-white">Cloud Deployment</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4  ">Company</h3>
          <ul className="space-y-2 text-sm text-purple-100">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div >
          <h3 className="text-lg font-semibold mb-4  text-black">Connect with Us</h3>
          <div className="flex space-x-4 mb-4  text-black">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
          </div>
          <p className="text-sm  text-black">Email: hello@univexa.com</p>
          <p className="text-sm  text-black">Phone: +92-XXX-XXXXXXX</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12  border-purple-700 pt-6 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} UNIVEXA Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
