
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Globe, Clock, Building2 } from 'lucide-react';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["15541 182-184 High Street North", "East Ham, London, E6 2JA"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@uaeoffers.co.uk"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+44 7441 393402"]
    },
    {
      icon: Globe,
      title: "Website",
      details: ["https://uaeoffers.co.uk"]
    }
  ];

  const companyInfo = [
    {
      icon: Building2,
      title: "Company Information",
      details: ["Company Number: 16826721", "Jurisdiction: England & Wales"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM GMT"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Helmet>
        <title>Get in Touch | UAE OFFERS LTD</title>
        <meta name="description" content="Contact UAE OFFERS LTD for enterprise-grade IT consulting and system integration services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Ready to transform your digital infrastructure? Our team of experts is here to discuss your technical requirements and business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">Corporate Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {companyInfo.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-primary mb-2">Send us a message</h2>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and our technical team will respond within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
