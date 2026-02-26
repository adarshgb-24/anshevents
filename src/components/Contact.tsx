import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gold-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Let's Plan Your <span className="italic text-gold-700">Perfect Event</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold-100">
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Details</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office Location</p>
                    <p className="text-gray-600 mt-1">Rajdhani Colony, Gokul Rd, beside Ganesh temple, Vikas Nagar, Hubballi, Karnataka 580021</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 mt-1">088844 74411</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 mt-1">hello@anshevents.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="text-gray-600 mt-1">Open 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <a href="https://www.instagram.com/anshevents_hubli?igsh=MWJmbGJkdGFqOWNmOA==" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700 mt-1 inline-block">@anshevents_hubli</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Integration */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-gold-100 relative group">
              <iframe
                title="Ansh Events Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3bbfb75b1114d13%3A0x631023026330b659!2sAnsh%20Events%20-%20Birthday&#39;s%2C%20Engagements%2CBaby%20Shower%2C%20Naming%20Ceremony%20%26%20Wedding%20Event%20Planners%20in%20Hubli!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/o7YcASn8eZx8TmSr9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Open in Google Maps
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gold-100"
          >
            <h4 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send Us a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  id="eventType"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all bg-white"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select an event type</option>
                  <option value="wedding">Wedding & Engagement</option>
                  <option value="birthday">Birthday Party Planning</option>
                  <option value="corporate">Corporate & Conference</option>
                  <option value="theme">Theme Party</option>
                  <option value="anniversary">Anniversary Party Planning</option>
                  <option value="baby-shower">Baby Shower Planning</option>
                  <option value="school">School Event</option>
                  <option value="retirement">Retirement Party Planning</option>
                  <option value="religious">Religious Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your dream event..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gold-600 text-white font-medium text-lg hover:bg-gold-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
