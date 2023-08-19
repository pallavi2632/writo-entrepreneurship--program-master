import React from "react";

const StudentReview = (props) => {
  const { video } = props;
  return (
    <div className="xxs:ml-[15px] xs:ml-[22px]  md:ml-0 p-2 xxs:w-[90%] min-w-[30%] min-h-[95%] md:w-[95%] lg:w-[90%] lg:mr-4 border-solid  bg-opacity-10 mb-5 shadow-3xl hover:shadow-4xl hover:bg-opacity-20 rounded-[30px] bg-webGreen">
      <div className="flex items-center">
        <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
        <div className=" md:ml-5 xxs:ml-2">
          <p className="pt-5  sm:text-2xl xxs:text-xl">{props.name}</p>
          <p className=" m text-webRed sm:text-2xl xxs:text-lg font-semibold text-left">
            {props.companyname}
          </p>
        </div>
      </div>

      <p className="text-base text-justify tracking-wide md:mx-5 lg:mx-3 pt-5">
        {props.para}
      </p>
      <div className="flex justify-center min-h-[50%] min-w-[30%] items-center ">
        {video ? (
          <iframe
            className="xxs:w-[220px] xxs:pt-2 xs:w-[280px] sm:w-[300px] sm:h-[350px] min-w-[200px] min-h-[30%]  md:w-[250px] lg:w-[280px] lg:h-[200px] rounded-3xl border-solid border-webGreen"
            src={video}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default StudentReview;
