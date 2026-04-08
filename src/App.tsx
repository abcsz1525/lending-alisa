import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { AboutCourse } from './sections/AboutCourse';
import { Program } from './sections/Program';
import { ForWhom } from './sections/ForWhom';
import { Instructor } from './sections/Instructor';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#080810' }}>
      <Navigation />
      <main>
        <Hero />
        <AboutCourse />
        <Program />
        <ForWhom />
        <Instructor />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
