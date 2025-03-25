import React from 'react';

export default function AboutUs() {
  return (
    <section className="section-container py-20 bg-gray-50" id="about">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="section-headline">About Yusstech</h2>
          <p className="section-subheadline">Your Trusted Partner in Digital Innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-gray-600">
                  Founded with a vision to transform digital landscapes, Yusstech has grown into a powerhouse of innovation and technical excellence. We combine cutting-edge technology with creative solutions to help businesses thrive in the digital age.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/10 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage. We believe in building lasting partnerships and delivering exceptional value to every client.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/10 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Innovation & Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Client Success
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Integrity & Transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Continuous Learning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 z-0"></div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full bg-secondary/10 z-0"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 