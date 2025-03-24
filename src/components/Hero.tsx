import React from 'react';

export default function Hero() {
  return (
    <section className="section-container flex flex-col items-center justify-center py-20 text-center lg:text-left lg:items-start min-h-[90vh] lg:min-h-[80vh]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="hero-headline mb-6">
              We Ship Products While You Focus On Growth
            </h1>
            <p className="hero-subheadline mb-8">
              100% guaranteed completion for your website, app, or AI solution—or your money back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a className="cta-primary" href='https://calendly.com/yusstechh/30min'>
            
                Schedule Your Strategy Call</a>
              
              <button className="cta-primary">
              
              </button>
              <span className="text-sm font-medium text-accent">
                Only 5 spots available this week
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 z-0"></div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-secondary/10 z-0"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <p className="text-sm">
                      &ldquo;Their team delivered our web app <strong>2 weeks ahead of schedule</strong>, allowing us to capture a major client opportunity.&rdquo;
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <p className="text-sm">
                      &ldquo;Unlike other agencies, they <strong>actually delivered</strong> on their promise of a 100% completion guarantee.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="stat-number">99.8%</div>
            <div className="stat-label">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="stat-number">320+</div>
            <div className="stat-label">Hours Saved Per Client</div>
          </div>
          <div className="text-center">
            <div className="stat-number">94%</div>
            <div className="stat-label">Client Return Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
} 