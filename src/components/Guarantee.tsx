import React from 'react';

export default function Guarantee() {
  return (
    <section className="section-container py-20 bg-light-gray">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-headline mx-auto mb-8 inline-block">
            Our 100% Completion Guarantee
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white flex flex-col items-center justify-center p-4 shadow-lg">
                  <div className="text-accent font-bold text-4xl mb-2">100%</div>
                  <div className="font-semibold text-dark-gray text-center leading-tight">Completion Guarantee</div>
                  
                  <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-lg mb-4">
                If we don&apos;t deliver your project to the agreed specifications and timeline, we&apos;ll refund your money. It&apos;s that simple.
              </p>
              <p className="text-base text-text-light">
                In 5 years, we&apos;ve only had to honor this guarantee twice—and we fixed those projects anyway because we stand by our commitment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="stat-number mb-1">99.8%</div>
                <div className="stat-label">First-Time Completion Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="stat-number mb-1">100%</div>
                <div className="stat-label">Eventually Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="stat-number mb-1">0</div>
                <div className="stat-label">Unhappy Clients</div>
              </div>
            </div>
            
            <blockquote className="bg-white p-6 rounded-lg shadow-sm mb-8 text-sm italic">
              &ldquo;The guarantee was what initially convinced us to take a chance with Yusstech. Their confidence wasn&apos;t misplaced—they delivered on time and exceeded our expectations.&rdquo;
              <div className="mt-4 flex items-center">
                <div className="mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <div>
                  <p className="font-medium text-sm not-italic">Robert Chen</p>
                  <p className="text-xs text-text-light not-italic">COO, TechVentures</p>
                </div>
              </div>
            </blockquote>
            
            <div className="flex justify-center md:justify-start">
              <button className="cta-primary">Schedule Your Strategy Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 