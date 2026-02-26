import { motion } from 'motion/react';
import { Heart, Gift, Briefcase, Sparkles, Camera, Users, Music, Utensils, Baby, GraduationCap, PartyPopper, Tent } from 'lucide-react';

const defaultDescription = "Depends on the requirements of the customer. Contact us for: All kind of Theme based Decorations, Traditional and Party requirements. Photography Photos and Videos Shamiyana - Chairs, Tables, Shamiyana Catering- Snacks and Food arrangements Contact Suman Rajat Kulkarni 088844 74411";

const services = [
  {
    title: 'Wedding & Engagement',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-pink',
  },
  {
    title: 'Birthday Party Planning',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-blue',
  },
  {
    title: 'Corporate & Conference',
    description: 'All kinds of services available for professional and seamless corporate event planning.',
    price: 'From ₹10,000.00',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    color: 'bg-gold-50',
  },
  {
    title: 'Theme Party',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-green',
  },
  {
    title: 'Anniversary Party Planning',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1522413452208-99690151c270?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-pink',
  },
  {
    title: 'Baby Shower Planning',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-blue',
  },
  {
    title: 'School Event',
    description: 'Complete planning and execution for school annual days, sports events, and celebrations.',
    price: 'From ₹10,000.00',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    color: 'bg-gold-50',
  },
  {
    title: 'Retirement Party Planning',
    description: 'Celebrate milestones with elegant and memorable retirement party arrangements.',
    price: 'From ₹5,000.00',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-green',
  },
  {
    title: 'Religious Event',
    description: 'Respectful and beautifully organized setups for all your religious ceremonies and gatherings.',
    price: 'Contact for pricing',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1604882749091-81766a2c2065?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-pink',
  },
  {
    title: 'Balloon Decoration',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-blue',
  },
  {
    title: 'Children\'s Party Planning',
    description: defaultDescription,
    price: 'From ₹3,000.00',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop',
    color: 'bg-gold-50',
  },
  {
    title: 'Catering Services',
    description: 'Delicious snacks and food arrangements tailored to your event requirements.',
    price: 'Contact for pricing',
    icon: Utensils,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pastel-green',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight"
          >
            Bespoke Event <span className="italic text-gold-700">Services</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of event planning services tailored to your unique needs, ensuring every detail is perfect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${service.color} flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                  <service.icon className="w-6 h-6 text-gold-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gold-600 font-semibold text-sm mb-3">{service.price}</p>
                <p className="text-gray-600 text-xs leading-relaxed flex-grow line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-black/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-sm font-semibold text-gold-600 hover:text-gold-800 transition-colors uppercase tracking-wider"
                  >
                    Book Now
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
