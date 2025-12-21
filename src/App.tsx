// App.tsx
import React from 'react';
import ProfileCard from './components/card/profilecard';
import DesignTools from './components/designTools/DesignTools';
import SkillsSection from './components/skills/SkillsSection';
import SocialLinks from './components/social/SocialLinks';
import CallToAction from './components/cta/CallToAction';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <div className="main-column">
        <div className="portfolio-top">
          <div className="top-left">
            <ProfileCard />
          </div>
          <div className="top-right">
            <DesignTools />
          </div>
        </div>
        
        <div className="portfolio-middle">
          <SkillsSection />
        </div>
        
        <div className="portfolio-bottom">
          <div className="bottom-left">
            <SocialLinks />
          </div>
          <div className="bottom-right">
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
