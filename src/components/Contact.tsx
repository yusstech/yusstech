import React from 'react';

export default function Contact() {
  return (
    <section className="section-container py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-headline mb-8">
              Ready To Ship Your Project?
            </h2>
            
            <p className="text-lg mb-6">
              Schedule a free strategy call to discuss your project needs and see how our 100% completion guarantee can work for you.
            </p>
            
            <div className="bg-light-gray rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4">What to expect:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">30-minute discovery call</p>
                    <p className="text-sm text-text-light">We&apos;ll discuss your project needs and goals</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">No-obligation assessment</p>
                    <p className="text-sm text-text-light">Get our professional opinion on your project</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Clear next steps</p>
                    <p className="text-sm text-text-light">Whether we&apos;re a fit or not, you&apos;ll know what to do next</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cta-primary">Schedule Your Strategy Call</button>
              <button className="cta-secondary">Email Us Instead</button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 -translate-y-1/4 translate-x-1/4 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-secondary/10 translate-y-1/4 -translate-x-1/4 z-0"></div>
            
            <div className="relative bg-white rounded-xl shadow-lg p-8 z-10">
              <h3 className="font-semibold text-xl mb-6 text-center">Client Satisfaction</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>
                  <div>
                    <blockquote className="text-sm">
                      &ldquo;The entire process was smooth from start to finish. They communicated clearly, delivered ahead of schedule, and the quality exceeded our expectations.&rdquo;
                    </blockquote>
                    <div className="mt-2">
                      <p className="text-xs font-medium">Michelle Davis</p>
                      <p className="text-xs text-text-light">CEO, StyleShare</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                  </div>
                  <div>
                    <blockquote className="text-sm">
                      &ldquo;What sets Yusstech apart is their dedication to actually shipping. After two failed attempts with other agencies, they finally got our product to market.&rdquo;
                    </blockquote>
                    <div className="mt-2">
                      <p className="text-xs font-medium">James Wilson</p>
                      <p className="text-xs text-text-light">Founder, LogisticsPro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 