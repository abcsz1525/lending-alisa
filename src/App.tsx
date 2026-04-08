import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { AboutCourse } from './sections/AboutCourse';
import { Program } from './sections/Program';
import { ForWhom } from './sections/ForWhom';
import { Instructor } from './sections/Instructor';

import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1E1C1A' }}>
      <Navigation />
      <main>
        <Hero />
        <AboutCourse />
        <Program />
        <ForWhom />
        <Instructor />

        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
