

function AboutUs(){




    return(


        <>
        <section>

            
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, libero assumenda voluptatum iusto fugiat et provident dicta impedit, nostrum doloribus exercitationem nihil earum laboriosam. Quos eum expedita incidunt accusantium error?</h1>
                   
            <div>
              <div className="card mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-primary">237%</span>
                    <span className="text-sm text-text-light ml-2">Increase in Leads</span>
                  </div>
                </div>
                <blockquote className="text-sm mb-6">
                  &ldquo;Our new website generates more qualified leads in a week than our old site did in a month. The conversion-focused design has completely transformed our business.&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-text-light">Marketing Director, AccuTech</p>
                  </div>
                </div>
              </div>
            </div>

        </section>
        
        </>
    )
}

export default AboutUs;