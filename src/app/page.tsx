import Header from '../components/Header';
import Hero from '../components/Hero';
import WebsiteDevelopment from '../components/WebsiteDevelopment';
import WebApplications from '../components/WebApplications';
import MobileApps from '../components/MobileApps';
import AISolutions from '../components/AISolutions';
import ProjectRescue from '../components/ProjectRescue';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="websites">
          <WebsiteDevelopment />
        </div>
        
        <div id="apps">
          <WebApplications />
        </div>
        
        <div id="mobile">
          <MobileApps />
        </div>
        
        <div id="ai">
          <AISolutions />
        </div>
        
        <div id="rescue">
          <ProjectRescue />
        </div>
        
        <div id="guarantee">
          <Guarantee />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
