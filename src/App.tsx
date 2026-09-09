import React, { useState } from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { VSLSection } from './components/VSLSection';
import { HowItWorks } from './components/HowItWorks';
import { ImageCarousel } from './components/ImageCarousel';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Bonuses } from './components/Bonuses';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalOffer } from './components/FinalOffer';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');

  const handleOpenCheckout = (plan?: 'basic' | 'complete') => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleScrollToPlans = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3EEE4] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#E8632C] selection:text-white">
      {/* 1. Urgency Bar (Top Banner) */}
      <UrgencyBar />

      {/* Main Content Sections in Specified Order */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onCtaClick={handleScrollToPlans} />

        {/* 3. Problem Section ("Isso lhe parece familiar?") */}
        <ProblemSection />

        {/* 4. VSL / Turning Point Section ("E se eles implorassem...") */}
        <VSLSection onCtaClick={handleScrollToPlans} />

        {/* 5. How It Works Section (3 steps with dashed line) */}
        <HowItWorks />

        {/* 6. Image Carousel Showcase */}
        <ImageCarousel />

        {/* 7. Projects Showcase & Materials Overview */}
        <ProjectsShowcase />

        {/* 8. Free Bonuses Section (3 Cards) */}
        <Bonuses onCtaClick={handleScrollToPlans} />

        {/* 9. Special Launch Offer Section */}
        <FinalOffer onCtaClick={handleOpenCheckout} />

        {/* 10. Social Proof & Testimonials */}
        <Testimonials />

        {/* 12. FAQ Accordion */}
        <FAQ />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Checkout & Instant Access Simulator Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} plan={selectedPlan} />
    </div>
  );
}
