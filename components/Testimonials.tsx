'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow',
    companyLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&auto=format',
    quote: 'MatchAI transformed how we recruit talent. Our hiring accuracy improved by 340% and time-to-hire dropped from weeks to days.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'ScaleUp',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop&auto=format',
    quote: 'The AI matching algorithm is incredibly precise. We found perfect-fit candidates that traditional recruiting would have missed entirely.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Emily Watson',
    role: 'Head of People',
    company: 'Innovate Labs',
    companyLogo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=120&h=40&fit=crop&auto=format',
    quote: 'MatchAI doesn\'t just match skills—it understands culture fit. Our retention rates have never been higher. Game-changing technology.',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-600 font-semibold text-sm uppercase tracking-wider mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">See how top companies leverage MatchAI to build exceptional teams faster than ever before.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="mb-6 h-8 flex items-center">
                <div className="bg-slate-100 rounded-lg px-4 py-2">
                  <span className="text-slate-700 font-semibold text-sm">{testimonial.company}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-8">
                <svg className="w-8 h-8 text-violet-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 text-lg leading-relaxed">{testimonial.quote}</p>
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-violet-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role} at <span className="text-violet-600">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Powering talent acquisition for 500+ companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['TechCorp', 'Innovate', 'DataFlow', 'CloudScale', 'NextGen'].map((company) => (
              <span key={company} className="text-slate-400 font-semibold text-lg">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}