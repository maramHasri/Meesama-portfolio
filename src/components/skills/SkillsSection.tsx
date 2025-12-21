import { useState } from "react";
import "./SkillsSection.css";

interface SkillButtonProps {
  title: string;
  color: string;
  onClick: () => void;
}

const SkillButton = ({ title, color, onClick }: SkillButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="skill-button-wrapper">
      <div className="skill-banner"><span>{title}</span></div>
      <button
        className={`skill-button ${isClicked ? "clicked" : ""}`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <div className="skill-content">
          <div className="devices-container">
            <div className="device desktop">
              <div className="screen">
                <div className="screen-content"></div>
              </div>
              <div className="stand"></div>
            </div>
            <div className="device mobile">
              <div className="screen">
                <div className="screen-content"></div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

const SkillsSection = () => {
  const handleSkillClick = (skill: string) => {
    console.log(`Clicked on ${skill}`);
    // You can add navigation or modal logic here
  };

  return (
    <div className="skills-section">
      <SkillButton
        title="PROGRAMMING"
        color="#B7E2EC"
        onClick={() => handleSkillClick("PROGRAMMING")}
      />
      <SkillButton
        title="UI UX"
        color="#F6DFA2"
        onClick={() => handleSkillClick("UI UX")}
      />
      <SkillButton
        title="ILLUSTRATION"
        color="#FFC1A5"
        onClick={() => handleSkillClick("ILLUSTRATION")}
      />
      <SkillButton
        title="ANIMATION"
        color="#A6F2C1"
        onClick={() => handleSkillClick("ANIMATION")}
      />
    </div>
  );
};

export default SkillsSection;

