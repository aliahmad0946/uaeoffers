
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowLeft, MapPin, Phone, Mail, Loader2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const RequestTechnicalBriefPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    techStack: '',
    challenges: '',
    phone: '',
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
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.industry.trim()) newErrors.industry = 'Industry/Sector is required';
    if (!formData.challenges.trim()) newErrors.challenges = 'Please describe your specific challenges';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
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
      
      const submissions = JSON.parse(localStorage.getItem('techBriefSubmissions') || '[]');
      submissions.push({
        ...formData,
        id: crypto.randomUUID(),
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('techBriefSubmissions', JSON.stringify(submissions));

      toast.success('Technical brief request submitted successfully.');
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
        <title>Request Technical Brief - UAE OFFERS LTD</title>
        <meta name="description" content="Request a customized technical brief for your enterprise IT requirements." />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request Technical Brief</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Provide us with an overview of your current environment and challenges. Our engineering team will prepare a preliminary technical brief outlining potential architectural solutions.
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
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Project Requirements</h2>
                <p className="text-sm text-muted-foreground">Detail your technical landscape and objectives.</p>
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
                  <Label htmlFor="company">Company Name <span className="text-destructive">*</span></Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} disabled={isSubmitting} className={errors.company ? 'border-destructive' : ''} />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry / Sector <span className="text-destructive">*</span></Label>
                  <Input id="industry" name="industry" value={formData.industry} onChange={handleChange} disabled={isSubmitting} className={errors.industry ? 'border-destructive' : ''} />
                  {errors.industry && <p className="text-xs text-destructive">{errors.industry}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="techStack">Current Technology Stack (Optional)</Label>
                <Textarea id="techStack" name="techStack" rows={2} placeholder="e.g., AWS, React, Node.js, PostgreSQL..." value={formData.techStack} onChange={handleChange} disabled={isSubmitting} className="resize-none" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Specific Challenges <span className="text-destructive">*</span></Label>
                <Textarea id="challenges" name="challenges" rows={3} placeholder="What are the main technical hurdles you are facing?" value={formData.challenges} onChange={handleChange} disabled={isSubmitting} className={`resize-none ${errors.challenges ? 'border-destructive' : ''}`} />
                {errors.challenges && <p className="text-xs text-destructive">{errors.challenges}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} disabled={isSubmitting} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message <span className="text-destructive">*</span></Label>
                <Textarea id="message" name="message" rows={3} placeholder="Any other details we should know?" value={formData.message} onChange={handleChange} disabled={isSubmitting} className={`resize-none ${errors.message ? 'border-destructive' : ''}`} />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full md:w-auto px-8 h-11" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : 'Submit Request'}
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

export default RequestTechnicalBriefPage;
