import React, {useEffect, useRef} from "react";
import "./index.css";
import processImg from "../../images/entre-green-with-bg.svg";

const RoadMap = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollX;
      imageRef.current.style.transform = `translateX(${scrollPosition}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
          <div class="image-container">
          <img ref={imageRef}
            src={processImg}
            alt="process img"
          />
        </div>
      
  );
};


export default RoadMap;
