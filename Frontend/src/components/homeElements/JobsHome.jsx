import React, { useEffect, useState } from "react";
import "../JobPosts/index.css";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import JobCard from "../../elements/JobCard";



function JobsHome({jobsdata}) {
  return (
    <div className="jobsHome">
      <div className="jobsHeader">
        <div className="titles">
          <p className="paraLarge jobs">Jobs and Interns</p>
          <div className="titleSvg">
            <Link to="/opportunities">
              <LiaArrowRightSolid />
            </Link>
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="jobsHomesCards md:space-x-8 space-x-0 md:space-y-0 space-y-12">
        {
            jobsdata.slice(0,3).map((item, idx) => {
                return(
                    <JobCard key={idx} job={item} />
                )
            })
        }
      </div>
    </div>
  );
}

export default JobsHome;
