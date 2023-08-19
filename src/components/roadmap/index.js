import React from "react";
import "./index.css";
import processImg from "../../images/processImg.png";

const RoadMap = (props) => {
  return (
    <div className="flex xxs:flex-col lg:flex-row lg:mx-7 xxs:px-5 ">
      <div className="xxs:mb-7 xxs:px-0 lg:px-3 ">
        <h2 className="text-webRed mb-4 xxs:text-base md:text-2xl lg:text-3xl ">
          01
        </h2>
        <img
          src={processImg}
          alt="process icon"
          className="border-solid xxs:w-5 lg:drop-shadow-5xl xxs:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mix-blend-multiply "
        />
        <h2 className="xxs:mt-4 lg:mt-8 text-webRed xxs:text-2xl lg:text-3xl">
          Heading
        </h2>
        <p className="xxs:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          eveniet doloremque harum minima atque est, doloribus, exercitationem
          itaque odio tempora quos necessitatibus.
        </p>
      </div>

      <div className="xxs:mb-7 xxs:px-0 lg:px-4 lg:pt-8">
        <h2 className="text-webRed mb-4 xxs:text-base md:text-2xl lg:text-3xl ">
          02
        </h2>
        <img
          src={processImg}
          alt="process icon"
          className="border-solid xxs:w-5 lg:drop-shadow-5xl xxs:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mix-blend-multiply "
        />
        <h2 className="xxs:mt-4 lg:mt-8 text-webRed xxs:text-2xl lg:text-3xl">
          Heading
        </h2>
        <p className="xxs:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          eveniet doloremque harum minima atque est, doloribus, exercitationem
          itaque odio tempora quos necessitatibus.
        </p>
      </div>

      <div className="xxs:mb-7 xxs:px-0 lg:px-4 ">
        <h2 className="text-webRed mb-4 xxs:text-base md:text-2xl lg:text-3xl ">
          03
        </h2>
        <img
          src={processImg}
          alt="process icon"
          className="border-solid xxs:w-5 lg:drop-shadow-5xl xxs:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mix-blend-multiply "
        />
        <h2 className="xxs:mt-4 lg:mt-8 text-webRed xxs:text-2xl lg:text-3xl">
          Heading
        </h2>
        <p className="xxs:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          eveniet doloremque harum minima atque est, doloribus, exercitationem
          itaque odio tempora quos necessitatibus.
        </p>
      </div>

      <div className="xxs:mb-7 xxs:px-0 lg:px-4 lg:pt-8">
        <h2 className="text-webRed mb-4 xxs:text-base md:text-2xl lg:text-3xl ">
          04
        </h2>
        <img
          src={processImg}
          alt="process icon"
          className="border-solid xxs:w-5 lg:drop-shadow-5xl xxs:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mix-blend-multiply "
        />
        <h2 className="xxs:mt-4 lg:mt-8 text-webRed xxs:text-2xl lg:text-3xl">
          Heading
        </h2>
        <p className="xxs:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          eveniet doloremque harum minima atque est, doloribus, exercitationem
          itaque odio tempora quos necessitatibus.
        </p>
      </div>
      <div className="xxs:mb-7 xxs:px-0 lg:px-4 ">
        <h2 className="text-webRed mb-4 xxs:text-base md:text-2xl lg:text-3xl ">
          05
        </h2>
        <img
          src={processImg}
          alt="process icon"
          className="border-solid xxs:w-5 lg:drop-shadow-5xl xxs:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mix-blend-multiply "
        />
        <h2 className="xxs:mt-4 lg:mt-8 text-webRed xxs:text-2xl lg:text-3xl">
          Heading
        </h2>
        <p className="xxs:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          eveniet doloremque harum minima atque est, doloribus, exercitationem
          itaque odio tempora quos necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default RoadMap;
