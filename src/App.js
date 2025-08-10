import React from 'react';
import TopNavigation from './components/TopNavigation';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <TopNavigation />
      
      <main>
        <HeroSection />
        
        <div className="flex justify-center py-[80px]">
          <ServiceSection
            title="Web & Mobile App Development"
            description="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/2610ab0275a835507df2eb7dc4818d8c648b8ad0?width=828"
            imageLeft={true}
          />
        </div>
        
        <div className="flex justify-center py-[80px]">
          <ServiceSection
            title="Digital Strategy Consulting"
            description="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
            imageSrc="https://api.builder.io/api/v1/image/assets/TEMP/a69c38d1b81b13fd09d6459f90207c4a0037e2d4?width=828"
            imageLeft={false}
          />
        </div>
        
        <div className="flex justify-center py-[80px]">
          <FAQ />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
