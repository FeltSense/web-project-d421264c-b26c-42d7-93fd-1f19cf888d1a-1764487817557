'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with CTA */}
        <div className="border-b border-slate-800 pb-16 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                Ready to find your perfect match?
              </h3>
              <p className="text-slate-400">
                Join thousands using AI to discover meaningful connections.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              Get Started Free
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
              MatchAI
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              AI-powered matching that understands you. Smarter connections, better relationships, real results.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Company</h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Support</h4>
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MatchAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-emerald-400 transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
