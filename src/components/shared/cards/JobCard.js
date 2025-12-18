"use client";
import Link from "next/link";
import React, { useState } from "react";
import JobModal from "../modals/JobModal";

const JobCard = ({ job }) => {
  const { id, title, location, salary, isRemote, type } = job;
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className="job__card">
        <div className="job__card__header">
          <h3 className="job__card__title">{title}</h3>
          <span className="job__card__salary">{salary}</span>
        </div>
        <div className="job__card__details">
          <div className="job__card__detail">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <span>{location}</span>
          </div>
          {isRemote && (
            <div className="job__card__detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
              </svg>
              <span>Remoto</span>
            </div>
          )}
        </div>
        <div className="job__card__footer">
          <span className="job__card__type">{type}</span>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="job__card__view"
          >
            Ver oferta
          </button>
          <Link href="#aplicar" className="job__card__apply">
            Aplicar
          </Link>
        </div>
      </div>
      
      <JobModal 
        job={job} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default JobCard;
