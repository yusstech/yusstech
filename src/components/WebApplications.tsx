import React from 'react';

export default function WebApplications() {
  return (
    <section className="section-container py-20 bg-light-gray">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="section-headline mb-12">
            Web Applications That Automate Your Business
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="pain-point mb-8">
                <h3 className="pain-headline">
                  Drowning in Manual Processes and Spreadsheets?
                </h3>
                <p className="text-text-light">
                  Every hour your team spends on manual data entry, spreadsheet management, and disjointed workflows is costing you money and competitive advantage.
                </p>
              </div>
              
              <div className="solution-description">
                <p className="mb-4">
                  We build custom web applications that automate your core business processes, creating efficiency and insights that spreadsheets can&apos;t match:
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Custom dashboards that show real-time business metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Workflow automation that eliminates repetitive tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Integrated systems that end data silos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>Scalable solutions that grow with your business</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="card mb-6">
                <h4 className="font-semibold text-lg mb-5">How We Helped ServeCo Save 30 Hours Per Week</h4>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="stat-number text-xl">30+</div>
                    <div className="stat-label text-xs">Hours Saved Weekly</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="stat-number text-xl">62%</div>
                    <div className="stat-label text-xs">Error Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="stat-number text-xl">$96K</div>
                    <div className="stat-label text-xs">Annual Savings</div>
                  </div>
                </div>
                
                <p className="text-sm mb-4">
                  ServeCo was managing their entire customer service operation through email and spreadsheets. We built a custom service portal that automated ticket routing, follow-up, and reporting.
                </p>
                
                <div className="flex items-center">
                  <span className="text-primary mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </span>
                  <a href="#" className="text-primary text-sm font-medium">Read the full case study →</a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Michael Rodriguez</p>
                    <p className="text-xs text-text-light">Operations Director, ServeCo</p>
                  </div>
                </div>
                <blockquote className="text-sm">
                  &ldquo;The custom app paid for itself within 3 months. Now our team focuses on solving customer problems instead of managing spreadsheets. The real-time dashboards have made us much more proactive.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold text-xl mb-4">Ready to automate your business processes?</h4>
          <button className="cta-primary mb-3">Book Your Solution Blueprint</button>
          <p className="text-sm text-text-light">Free 30-minute consultation with our solution architect</p>
        </div>
      </div>
    </section>
  );
} 