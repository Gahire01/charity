
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Eye, Phone, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-teal-400" /> 0782 256 252</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-teal-400" /> Mon - Fri: 8:00 AM - 5:00 PM</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-teal-400" /> Runda, Rwanda</span>
          </div>
          <div className="flex items-center space-x-4">
             <Link to="/contact" className="hover:text-teal-400 transition-colors">Book Now</Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Eye className="text-white" size={28} />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 block leading-tight">Rwanda Charity</span>
                <span className="text-sm font-medium text-teal-600 tracking-wider uppercase block">Eye Hospital</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-teal-600 ${
                    location.pathname === link.path ? 'text-teal-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 active:scale-95"
              >
                Book Appointment
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-lg font-medium ${
                    location.pathname === link.path ? 'text-teal-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-teal-600 text-white text-center py-4 rounded-xl font-bold"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-600 p-2 rounded-lg">
                  <Eye className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold text-white">RCEyeHospital</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Dedicated to providing world-class eye care and restoring vision through compassionate charity and clinical excellence in Runda, Rwanda.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-teal-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Cataract Surgery</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Glaucoma Care</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Pediatric Eye Care</Link></li>
                <li><Link to="/services" className="hover:text-teal-400 transition-colors">Retinal Health</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-teal-500 shrink-0" size={18} />
                  <span>Unnamed Road, Runda, Rwanda<br/><span className="text-sm opacity-60">Location Code: 2XJC+Q4 Runda</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-teal-500 shrink-0" size={18} />
                  <span>0782 256 252</span>
                </li>
                <li className="flex items-center gap-3">
                  <Eye className="text-teal-500 shrink-0" size={18} />
                  <span>rceyehospital.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} Rwanda Charity Eye Hospital. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
