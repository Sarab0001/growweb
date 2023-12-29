// import { useEffect } from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import { ProjectCardData } from "./WorkCardData.js";

import React, { useEffect } from "react";

const Work = () => {
  // useEffect(()=>{
  //     console.log("ProjectCardData ",ProjectCardData)
  //     },[])
  
  return (
    <div className="work-contianer">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData?.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
