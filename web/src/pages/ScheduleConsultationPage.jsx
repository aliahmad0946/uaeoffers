
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft, MapPin, Phone, Mail, Loader2, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ScheduleConsultationPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.service) newErrors.service = 'Please select a service of interest';
    if (!formData.message.trim()) newErrors.message = 'Please provide some details';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please correct the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const submissions = JSON.parse(localStorage.getItem('consultationSubmissions') || '[]');
      submissions.push({
        ...formData,
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('consultationSubmissions', JSON.stringify(submissions));

      toast.success('Consultation request submitted successfully.');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Helmet>
        <title>Schedule a Consultation - UAE OFFERS LTD</title>
        <meta name="description" content="Schedule a technical consultation with our enterprise IT experts." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-primary-foreground/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedule a Consultation</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Connect with our technical architects to discuss your infrastructure, software development, or digital strategy needs. We'll help you map out a robust path forward.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-card rounded-2xl shadow-lg border border-border/50 p-6 md:p-10"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CalendarClock className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Consultation Details</h2>
                <p className="text-sm text-muted-foreground">Please provide your information below.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} className={errors.name ? 'border-destructive' : ''} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email <span className="text-destructive">*</span></Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className={errors.email ? 'border-destructive' : ''} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} disabled={isSubmitting} className={errors.phone ? 'border-destructive' : ''} />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name <span className="text-destructive">*</span></Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} disabled={isSubmitting} className={errors.company ? 'border-destructive' : ''} />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest <span className="text-destructive">*</span></Label>
                  <Select onValueChange={handleSelectChange} disabled={isSubmitting}>
                    <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cloud Infrastructure & Security">Cloud Infrastructure & Security</SelectItem>
                      <SelectItem value="Custom Software & Web Development">Custom Software & Web Development</SelectItem>
                      <SelectItem value="Digital Strategy & Technical SEO">Digital Strategy & Technical SEO</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-destructive">{errors.service}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date & Time (Optional)</Label>
                  <Input id="date" name="date" type="datetime-local" value={formData.date} onChange={handleChange} disabled={isSubmitting} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Details <span className="text-destructive">*</span></Label>
                <Textarea id="message" name="message" rows={4} placeholder="Briefly describe your current setup and what you'd like to discuss..." value={formData.message} onChange={handleChange} disabled={isSubmitting} className={`resize-none ${errors.message ? 'border-destructive' : ''}`} />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full md:w-auto px-8 h-11" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scheduling...</> : 'Request Consultation'}
              </Button>
            </form>
          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6">
              <h3 className="text-lg font-semibold text-primary mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Headquarters</p>
                    <p className="text-sm text-muted-foreground mt-1">15541 182-184 High Street North<br/>East Ham, London, E6 2JA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground mt-1">+44 7441 393402</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a href="mailto:info@uaeoffers.co.uk" className="text-sm text-primary hover:underline">info@uaeoffers.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultationPage;
