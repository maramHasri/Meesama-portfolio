import "./DesignTools.css";
import designToolsImage from "../../assets/image/Layer_1.png";

const DesignTools = () => {
  return (
    <div className="design-tools">
      <img 
        src={designToolsImage} 
        alt="Design Tools" 
        className="design-tools-image"
      />
    </div>
  );
};

export default DesignTools;

