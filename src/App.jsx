import React from 'react';
import { useCustomCursor } from './hooks/useCustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import StatsBar from './components/StatsBar';
import InfoSection from './components/InfoSection';
import OfferingsSection from './components/OfferingsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import ConnectingStroke from './components/ConnectingStroke';

function App() {
  const { dotRef, ringRef } = useCustomCursor();

  const triangleDecor = () => (
    <>
      <div style={{
        position: 'absolute', top: '-10px', right: '-10px',
        width: '130px', height: '130px', backgroundColor: '#FF6B6B',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        transform: 'rotate(25deg)', zIndex: 1, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20px', left: '-20px',
        width: '150px', height: '150px', backgroundColor: '#FF6B6B',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        transform: 'rotate(-45deg)', zIndex: 1, pointerEvents: 'none'
      }} />
    </>
  );

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />

      <Header />

      <main>
        <HeroSection />

        {/* Marquee trust strip */}
        <MarqueeTicker />

        {/* Stats row */}
        <section style={{ padding: '80px 0' }}>
          <StatsBar />
        </section>

        {/* Info 1 — Tomorrow should be better than today */}
        <InfoSection
          title={
            <>
              <span className="text-underline-orange">Tomorrow</span> should<br />
              be better than <span className="text-highlight-green">today</span>
            </>
          }
          description="We are a team of creative designers and developers globally. We craft high-performing digital experiences for modern agencies and brands that move forward."
          buttonText="Play video"
          imageSrc="/images/meeting.png"
          reverse={false}
        >
          {triangleDecor(false)}
        </InfoSection>

        {/* Sweeping red Figma stroke connecting the two sections */}
        <ConnectingStroke />

        {/* Info 2 — See how we can help */}
        <InfoSection
          title={
            <>
              <span className="text-highlight-green">See</span> how we can<br />
              help you <span className="text-underline-orange">progress</span>
            </>
          }
          description="We craft high-performing websites looking for more traction. We strategise, design, and connect products with the consumers who need them most."
          buttonText="Read more"
          imageSrc="/images/laptop.png"
          reverse={true}
        >
          {triangleDecor()}
        </InfoSection>

        <OfferingsSection />

        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
