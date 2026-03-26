
import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div className="py-24 container mx-auto px-4">
      <Helmet>
        <title>About Us | UAE OFFERS LTD</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-primary mb-6">About UAE OFFERS LTD</h1>
      <p className="text-lg text-muted-foreground mb-4">Company information coming soon.</p>
      <p className="text-sm text-muted-foreground">
        For inquiries, please contact us at <a href="mailto:info@uaeoffers.co.uk" className="text-primary hover:underline">info@uaeoffers.co.uk</a> or visit <a href="https://uaeoffers.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://uaeoffers.co.uk</a>
      </p>
    </div>
  );
};

export default AboutPage;
