
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Code2, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard.jsx';

const HomePage = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Security",
      description: "Robust, scalable cloud solutions designed for enterprise-grade security and performance.",
      benefits: [
        "Zero-trust security architecture",
        "Automated infrastructure scaling",
        "24/7 monitoring and threat detection",
        "Disaster recovery planning"
      ]
    },
    {
      icon: Code2,
      title: "Custom Software & Web Development",
      description: "Bespoke applications built on modern tech stacks to solve complex business challenges.",
      benefits: [
        "Laravel & React expertise",
        "API-first development approach",
        "Legacy system modernization",
        "Agile delivery methodology"
      ]
    },
    {
      icon: LineChart,
      title: "Digital Strategy & Technical SEO",
      description: "Data-driven strategies that align technology investments with measurable business growth.",
      benefits: [
        "Comprehensive technical audits",
        "Performance optimization",
        "Conversion rate optimization",
        "Digital transformation roadmaps"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>UAE OFFERS LTD | IT Consulting & System Integration</title>
        <meta name="description" content="Driving Digital Transformation with Precision. Expert IT consulting, custom software development, and cloud infrastructure solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1699941150314-90a62569ef3a" 
            alt="Modern corporate architecture" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Driving Digital Transformation with Precision
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We deliver enterprise-grade IT consulting and system integration services, empowering businesses to scale securely and efficiently in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-12 px-8" asChild>
                <Link to="/schedule-consultation">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white" asChild>
                <Link to="/request-technical-brief">
                  Request Technical Brief
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to meet the rigorous demands of modern enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
