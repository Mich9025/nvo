"use client";
import React from "react";

const JobModal = ({ job, isOpen, onClose }) => {
  if (!isOpen || !job) return null;

  const { title, location, salary, isRemote, type, description, responsibilities, requirements, benefits } = job;

  return (
    <div className="job__modal__overlay" onClick={onClose}>
      <div className="job__modal" onClick={(e) => e.stopPropagation()}>
        <button className="job__modal__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="job__modal__header">
          <h2>{title}</h2>
          <div className="job__modal__meta">
            <div className="job__modal__meta__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <span>{location}</span>
            </div>
            <div className="job__modal__meta__item">
              <span className="job__modal__salary">{salary}</span>
            </div>
            {isRemote && (
              <div className="job__modal__meta__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" fill="currentColor"/>
                </svg>
                <span>Remoto</span>
              </div>
            )}
            <div className="job__modal__meta__item">
              <span className="job__modal__type">{type}</span>
            </div>
          </div>
        </div>

        <div className="job__modal__content">
          <div className="job__modal__section">
            <h3>Descripción del Puesto</h3>
            <p>{description}</p>
          </div>

          {responsibilities && responsibilities.length > 0 && (
            <div className="job__modal__section">
              <h3>Responsabilidades</h3>
              <ul>
                {responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {requirements && requirements.length > 0 && (
            <div className="job__modal__section">
              <h3>Requisitos</h3>
              <ul>
                {requirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {benefits && benefits.length > 0 && (
            <div className="job__modal__section">
              <h3>Beneficios</h3>
              <ul>
                {benefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="job__modal__footer">
          <a href="#aplicar" className="default__button btn__pink" onClick={onClose}>
            Aplicar a esta oferta
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
