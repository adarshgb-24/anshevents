import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white">
              Ansh <span className="text-gold-400 italic">Events</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Creating unforgettable moments and crafting memories with a personal touch. Your dream event, our flawless execution.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/anshevents_hubli?igsh=MWJmbGJkdGFqOWNmOA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Wedding & Engagement</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Birthday Party Planning</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Corporate & Conference</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Theme Party</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Baby Shower Planning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Rajdhani Colony, Gokul Rd, beside Ganesh temple, Vikas Nagar, Hubballi, Karnataka 580021</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">088844 74411</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@anshevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ansh Events. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
