import React from "react";
import Landing from "./components/landing/Index";
import googleImg from "./images/googleImg.png";
import appleImg from "./images/appleimg.png";
import amazonImg from "./images/amazonImg.png";
import airbnbImg from "./images/airbnbImage.png";
import microsoftImg from "./images/microsoftImg.png";
import youtubeImg from "./images/youtubeImg.png";
import GettingStarted from "./components/steps";
import MmentorImg from "./images/MmentorImg.png";
import Mentors from "./components/Mentors/Mentors";
import RoadMap from "./components/roadmap";
import "./App.css";
import StudentReview from "./components/studentReview";
import Steps from "./components/Msteps/Steps";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Overview from "./components/Overview/Overview";
import FAQS from "./components/FAQ/FAQS";
import LandingImg from "./images/LandingImgs.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./style.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function App() {
  return (
    <div className="w-min-{370px}">
      <Landing
        heading1="Your Success,"
        heading2="Our Focus:"
        heading3=" An"
        heading4='Entrepreneurship Awaits!'
        para1='"Creating a new enterprise and bearing any of its risks, with the view of making the profit through the entrepreneurship program which is designed to guide you to be a successful entrepreneur."'
        button="Let's Start Your Journey"
        para3="Our Leaders Placed At"
        googleImg={googleImg}
        appleImg={appleImg}
        amazonImg={amazonImg}
        airbnbImg={airbnbImg}
        microsoftImg={microsoftImg}
        youtubeImg={youtubeImg}
        MmentorImg={MmentorImg}
        LandingImg={LandingImg}
      />
      <Overview />
      <div className="sm:text-center ">
        <h1 className="lg:text-left  xxs:mt-[5rem] md:mt-[10rem] xxs:ml-2 sm:ml-0 lg:ml-9 xxs:mb-[1rem] md:mb-[3rem] pb-3   font-raleway  font-bold xl:text-6xl lg:text-5xl md:text-5xl sm:text-[35px] xs:text-[27.5px]  xxs:text-[22px]">
          Getting
          <span className="text-webRed xxs:px-1 sm:px-2">started</span>
          <span>is</span>
          <span className="text-webRed xxs:pl-1  sm:pl-2">easy!</span>
        </h1>
      </div>

      <div className="flex  xxs:flex-col lg:flex-row xxs:mx-2 md:mx-8 lg:mx-9  ">
        <GettingStarted
        display="flex"
          heading="Getting started is easy!"
          number="1"
          description="Explore available entrepreneurship programs, considering factors like curriculum, duration, reputation, and cost."
          btn="View Entrepreneurship Programs <FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight>>"
          icon={FaLongArrowAltRight }
        />
        

        <GettingStarted
          number="2"
           description="Complete application form with personal info, documents, and essays as required."
          btn="Fill Up Application ->"
          icon={FaLongArrowAltRight }
        />

        <GettingStarted
          number="3"
          description="Await acceptance notification, confirm enrollment, and begin the program according to schedule."
          btn="Get Started ->"
          icon={FaLongArrowAltRight }
        />
      </div>

      <div className="xxs:mt-[5rem] xxs:text-center lg:mt-[10rem] lg:ml-9">
        <h2 className="lg:text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap  animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-5xl sm:text-[35px] xs:text-4xl xxs:text-3xl">
          How it
          <span className="text-webRed pl-1">Works?</span>
        </h2>
      </div>

      <div className="flex lg:justify-around lg:mt-[5rem]  items-center  xxs:flex-col xxs:ml-2 md:mx-8 lg:flex-row ">
        <RoadMap />
      </div>

      <div className="xxs:mt-[1rem]  md:my-[5rem]   lg:mt-[10rem] lg:ml-8 mb-5 xs:ml-0 xxs:ml-3 xs:mx-4">
        <h2 className="lg:text-left xs:ml-2 xs:text-center lg:ml-5 pb-1 overflow-hidden whitespace-nowrap font-raleway   font-bold xl:text-6xl lg:text-6xl md:text-5xl sm:text-[2rem] xs:text-[1.7rem] xxs:text-[23px]">
          You too can <span className="text-webRed">get</span> into your
          <span className="text-webRed ">
            {window.innerWidth <= 1000 ? <br /> : ""} dream company!
          </span>
        </h2>
      </div>
      {/*       
      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-2 lg:grid-rows-2  xxs:flex xxs:flex-col"> */}
      <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        className="craw"
      >
        <StudentReview
          img={MmentorImg}
          name="Sujit Kumar"
          companyname=""
          para='"Harsh used to continuously keep a check on me. If I am doing well mentally. If I am executing my tasks. If I am on the right track"'
          video="https://www.youtube-nocookie.com/embed/J-vJMlJHpGU?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Kaushik Mukherjee"
          companyname=""
          para='"Thank you Sushrut for supporting me like a big brother, and helping me improve constantly"'
          video="https://www.youtube-nocookie.com/embed/BOvo-VwQ4y8?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Aditya Vardhan"
          companyname=""
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
          video="https://www.youtube-nocookie.com/embed/-Otv_sYGlak?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Lokesh"
          companyname=""
          para="Mentors at writo are amazing. They keep track of your progress through each round. Nimesh constantly advises new methods and adds to your knowledge. During the mock interview, he is quite professional and takes notes of my performance. I'm highly satisfied with Nimesh's technique of interviewing and his detailed feedback."
          video=""
        />
      </Carousel>

      <Steps />
      <Mentors />
      <FAQS />
    </div>
  );
}

export default App;
