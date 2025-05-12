
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = "https://wa.me/556181815737?text=Ol%C3%A1,%20vim%20do%20site.%0AQuero%20conhecer%20as%20hospedagens%20de%20voc%C3%AAs";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-1 sm:py-2'
          : 'bg-transparent py-2 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Logo Image - updating the logo path */}
              <Link to="/">
                <img 
                  src="/lovable-uploads/8620f06c-0844-44b1-8beb-b3c7467f69b2.png" 
                  alt="INOVAR TUR Logo" 
                  className={`transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'} w-auto`}
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {/* Social Media Icons */}
            <div className="flex space-x-3 mr-2">
              <a href="https://www.facebook.com/inovartur" 
                className={`transition-colors duration-300 hover:text-coral ${isScrolled ? 'text-gray-700' : 'text-white'}`} 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/inovartur" 
                className={`transition-colors duration-300 hover:text-coral ${isScrolled ? 'text-gray-700' : 'text-white'}`} 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            {/* Home page section links */}
            <Link 
              to="/"
              className={`capitalize font-medium transition-colors duration-300 hover:text-coral text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Início
            </Link>
            
            {['about', 'location', 'testimonials'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors duration-300 hover:text-coral text-sm lg:text-base ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item === 'about' ? 'Sobre' : 
                 item === 'location' ? 'Localização' :
                 item === 'testimonials' ? 'Depoimentos' : ''}
              </button>
            ))}
            
            {/* Gallery page link */}
            <Link 
              to="/gallery"
              className={`capitalize font-medium transition-colors duration-300 hover:text-coral text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Galeria
            </Link>
            
            <Button 
              onClick={handleWhatsAppContact} 
              className="bg-coral hover:bg-vibrantorange rounded-full text-xs lg:text-sm px-4 py-1.5"
            >
              Reserve Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Social Media Icons for Mobile */}
            <div className="flex space-x-3 mr-4">
              <a href="https://www.facebook.com/inovartur" 
                className={`transition-colors duration-300 hover:text-coral ${isScrolled ? 'text-deepblue' : 'text-white'}`} 
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/inovartur" 
                className={`transition-colors duration-300 hover:text-coral ${isScrolled ? 'text-deepblue' : 'text-white'}`} 
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
            
            <button
              onClick={toggleMobileMenu}
              className={`p-1.5 focus:outline-none ${isScrolled ? 'text-deepblue' : 'text-white'}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-coral rounded-md capitalize text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          
          {['about', 'location', 'testimonials'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-coral rounded-md capitalize text-sm"
            >
              {item === 'about' ? 'Sobre' : 
               item === 'location' ? 'Localização' :
               item === 'testimonials' ? 'Depoimentos' : ''}
            </button>
          ))}
          
          <Link
            to="/gallery"
            className="block w-full text-left px-3 py-1.5 text-gray-700 hover:bg-gray-100 hover:text-coral rounded-md capitalize text-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Galeria
          </Link>
          
          <div className="pt-1">
            <Button 
              onClick={handleWhatsAppContact} 
              className="w-full bg-coral hover:bg-vibrantorange text-xs py-1.5"
            >
              Reserve Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
