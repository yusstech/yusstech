import React from 'react';

export default function MobileApps() {
  return (
    <section className="section-container py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="section-headline mb-12">
            Mobile Apps Your Customers Will Actually Use
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="pain-point mb-8">
                <h3 className="pain-headline">
                  Missing Out On The Mobile-First World?
                </h3>
                <p className="text-text-light">
                  Over 70% of digital time is now spent on mobile devices. Without a mobile app, you&apos;re missing critical opportunities to engage customers and streamline operations.
                </p>
              </div>
              
              <div className="solution-description">
                <p className="mb-4">
                  We develop intuitive, high-performance mobile apps for iOS and Android that users love to engage with:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Native-feeling experiences with the latest UX patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Cross-platform solutions that work on all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Performance-optimized code for fast loading and response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Analytics integration to measure and improve usage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-light-gray rounded-2xl p-6 overflow-hidden mb-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -translate-x-12 translate-y-12"></div>
                
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-lg p-2 w-64 mx-auto mb-6">
                    <div className="bg-gray-800 rounded-lg h-[500px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4">
                        <div className="h-2 w-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-3 w-2/3 bg-gray-200 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="stat-number text-xl">4.8</div>
                      <div className="stat-label text-xs">App Store Rating</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="stat-number text-xl">83%</div>
                      <div className="stat-label text-xs">User Retention</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="stat-number text-xl">12.4</div>
                      <div className="stat-label text-xs">Avg. Session (min)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <blockquote className="text-sm mb-4">
                  &ldquo;The app completely transformed how we interact with customers. Order volume increased 42% within the first month of launch. Our competitors are still trying to catch up.&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">David Chen</p>
                    <p className="text-xs text-text-light">CEO, NutriMeal Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold text-xl mb-4">Ready to put your business in your customers&apos; pockets?</h4>
          <button className="cta-primary mb-3">Get Your Mobile Strategy</button>
          <p className="text-sm text-text-light">Includes app concept, user journey, and ROI projection</p>
        </div>
      </div>
    </section>
  );
} 