import { useState } from "react";
import "./SkillsSection.css";
import programmingImage from "../../assets/image/prograam.svg";
import uxImage from "../../assets/image/ux.svg";
import illustrationImage from "../../assets/image/illestrution.svg";
import animationImage from "../../assets/image/animation.svg";

interface SkillButtonProps {
  title: string;
  color: string;
  image: string;
  onClick: () => void;
}

const SkillButton = ({ title, color, image, onClick }: SkillButtonProps) => {
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
          <div className="skill-image-container">
            <img src={image} alt={title} className="skill-image" />
          </div>
        </div>
      </button>
    </div>
  );
};

const SkillsSection = () => {
  const handleSkillClick = (skill: string) => {
    if (skill === "PROGRAMMING") {
      window.open("https://github.com/maramHasri/SWE-Banking-system-with-design-patterns-", "_blank", "noopener,noreferrer");
    } else {
      console.log(`Clicked on ${skill}`);
      // You can add navigation or modal logic here for other skills
    }
  };

  return (
    <div className="skills-section">
      <SkillButton
        title="PROGRAMMING"
        color="#B7E2EC"
        image={programmingImage}
        onClick={() => handleSkillClick("PROGRAMMING")}
      />
      <SkillButton
        title="UI UX"
        color="#F6DFA2"
        image={uxImage}
        onClick={() => handleSkillClick("UI UX")}
      />
      <SkillButton
        title="ILLUSTRATION"
        color="#FFC1A5"
        image={illustrationImage}
        onClick={() => handleSkillClick("ILLUSTRATION")}
      />
      <SkillButton
        title="ANIMATION"
        color="#A6F2C1"
        image={animationImage}
        onClick={() => handleSkillClick("ANIMATION")}
      />
    </div>
  );
};

export default SkillsSection;

