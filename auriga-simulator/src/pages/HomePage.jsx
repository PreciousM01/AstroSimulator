import { useState, useEffect, useRef } from 'react';
import BackgroundVideo from "../components/shared/BackgroundVideo";
import Welcome from "../components/home/welcome";
import Features from "../components/home/features";
import HowToStart from "../components/home/HowToStart";
import ExampleVideos from "../components/home/exampleVideos";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['welcome', 'features', 'howtostart', 'examplevideos'];
  const scrollAccumulator = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      // If currently animating, ignore all scroll events
      if (isAnimating.current) return;
      
      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;
      
      // Only act when we've accumulated enough scroll (threshold)
      const threshold = 100; // Adjust this value if needed
      
      if (Math.abs(scrollAccumulator.current) >= threshold) {
        // Determine direction
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        
        // Reset accumulator immediately
        scrollAccumulator.current = 0;
        
        // Set animation lock
        isAnimating.current = true;
        
        // Move section
        setCurrentSection(prev => {
          if (direction > 0 && prev < sections.length - 1) {
            return prev + 1;
          } else if (direction < 0 && prev > 0) {
            return prev - 1;
          }
          return prev;
        });
        
        // Release lock after animation
        setTimeout(() => {
          isAnimating.current = false;
        }, 450); // Slightly longer than animation duration
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <BackgroundVideo />
      
      {/* Transform container for movement */}
      <div 
        className="relative z-10 transition-transform duration-400 ease-out"
        style={{ 
          transform: `translateY(-${currentSection * 100}vh)`,
          height: `${sections.length * 100}vh`
        }}
      >
        <section 
          id="welcome" 
          className="h-screen w-full flex items-center pt-24"
        >
          <div className="w-[70%] ml-8">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <Welcome />
            </div>
          </div>
        </section>

        <section 
          id="features" 
          className="h-screen w-full flex items-center"
        >
          <div className="w-[70%] ml-8">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <Features />
            </div>
          </div>
        </section>

        <section 
          id="howtostart" 
          className="h-screen w-full flex items-center"
        >
          <div className="w-[70%] ml-8">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <HowToStart />
            </div>
          </div>
        </section>

        <section 
          id="examplevideos" 
          className="h-screen w-full flex items-center"
        >
          <div className="w-[70%] ml-8">
            <div className="bg-black/80 backdrop-blur-sm text-white p-8 rounded-xl w-full max-w-4xl shadow-2xl">
              <ExampleVideos />
            </div>
          </div>
        </section>
      </div>

      {/* Section indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        {sections.map((section, index) => (
          <div
            key={section}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full mb-4 cursor-pointer transition-colors duration-200 ${
              currentSection === index ? 'bg-blue-400' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}