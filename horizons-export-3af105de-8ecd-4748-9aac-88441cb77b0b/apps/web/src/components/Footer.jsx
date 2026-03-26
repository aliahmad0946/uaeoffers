
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Legal Compliance Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              UAE OFFERS LTD
            </h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Registered Office:</p>
              <p>15541 182-184 High Street North</p>
              <p>East Ham, London, E6 2JA</p>
              <p className="pt-2">Company Number: 16826721</p>
              <p>Jurisdiction: England & Wales</p>
              <p className="pt-2">
                <a href="mailto:info@uaeoffers.co.uk" className="text-primary hover:underline">
                  info@uaeoffers.co.uk
                </a>
              </p>
              <p>
                <a href="https://uaeoffers.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://uaeoffers.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors mt-2">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Trust Badges */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Verified & Secure
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We adhere to the highest standards of security and compliance.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border shadow-sm">
                <CreditCard className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium">Visa / Mastercard</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-medium">Revolut Business</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UAE OFFERS LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
