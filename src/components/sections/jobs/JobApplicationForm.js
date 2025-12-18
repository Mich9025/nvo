"use client";
import React, { useState } from "react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "Colombia",
    email: "",
    areaCode: "",
    phone: "",
    position: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío del formulario
    alert("¡Gracias por tu aplicación! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="job__application__form" id="aplicar">
      <div className="job__application__header">
        <div className="job__application__icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="var(--nvoBlue)"/>
          </svg>
        </div>
        <div className="job__application__title">
          <h2>Aplicar a empleos</h2>
          <p>Complete el siguiente formulario para solicitar un puesto con nosotros.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="job__form">
        <div className="job__form__group">
          <label className="job__form__label">
            Nombres <span className="required">*</span>
          </label>
          <div className="job__form__row">
            <div className="job__form__field">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nombres"
                required
              />
            </div>
            <div className="job__form__field">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Apellidos"
                required
              />
            </div>
          </div>
        </div>

        <div className="job__form__group">
          <label className="job__form__label">
            Dirección <span className="required">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Dirección"
            required
          />
          <div className="job__form__row" style={{ marginTop: "10px" }}>
            <div className="job__form__field">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ciudad"
                required
              />
            </div>
            <div className="job__form__field">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="Colombia">Colombia</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="México">México</option>
                <option value="Perú">Perú</option>
              </select>
            </div>
          </div>
        </div>

        <div className="job__form__group">
          <label className="job__form__label">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ex: name@mail.com"
            required
          />
        </div>

        <div className="job__form__group">
          <label className="job__form__label">
            Teléfono <span className="required">*</span>
          </label>
          <div className="job__form__row">
            <div className="job__form__field" style={{ maxWidth: "150px" }}>
              <input
                type="text"
                name="areaCode"
                value={formData.areaCode}
                onChange={handleChange}
                placeholder="+57"
                required
              />
              <small>Area Code</small>
            </div>
            <div className="job__form__field">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono"
                required
              />
            </div>
          </div>
        </div>

        <div className="job__form__group">
          <label className="job__form__label">
            Aplicar para <span className="required">*</span>
          </label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un puesto</option>
            <option value="mensajero-express">Mensajero Express</option>
            <option value="coordinador-logistica">Coordinador de Logística</option>
            <option value="conductor-carga">Conductor de Vehículo de Carga</option>
            <option value="analista-operaciones">Analista de Operaciones</option>
            <option value="supervisor-entregas">Supervisor de Entregas</option>
            <option value="mensajero-motorizado">Mensajero Motorizado</option>
          </select>
        </div>

        <div className="job__form__group">
          <label className="job__form__label">
            Cargar CV <span className="required">*</span>
          </label>
          <div className="job__form__file">
            <input
              type="file"
              id="cv-upload"
              name="cv"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              required
              style={{ display: "none" }}
            />
            <label htmlFor="cv-upload" className="job__file__button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" fill="currentColor"/>
              </svg>
              Cargar archivo
            </label>
            {formData.cv && <span className="job__file__name">{formData.cv.name}</span>}
          </div>
        </div>

        <div className="job__form__submit">
          <button type="submit" className="default__button btn__pink">
            Enviar Aplicación
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
