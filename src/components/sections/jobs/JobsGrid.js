"use client";
import JobCard from "@/components/shared/cards/JobCard";
import getAllJobs from "@/libs/getAllJobs";
import React from "react";

const JobsGrid = () => {
  const jobs = getAllJobs();

  return (
    <div className="jobs__grid__section sp_top_40 sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jobs__grid__header">
              <div className="section__title__small">
                <span className="text__gradient">OPORTUNIDADES</span>
              </div>
              <h2 className="jobs__grid__title">
                Un paso hacia tu <span className="text__gradient">futuro empieza aquí</span>
              </h2>
              <p className="jobs__grid__subtitle">
                Únete a nuestro equipo y sé parte de la transformación logística en Colombia.  
                <br />
                Ofrecemos empleo formal, ingresos competitivos y oportunidades de crecimiento.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="">
            <div className="jobs__grid">
              {jobs?.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsGrid;
