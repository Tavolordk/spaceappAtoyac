"use client";

import { useForm } from "@/hooks/useForm";

export default function ContactSection() {
  const { formData, status, handleChange, handleSubmit } = useForm({
    fullname: "",
    email: "",
    phone: "",
    mensaje: "",
  });

  return (
    <section className="contact" id="contacto">
      <div className="contact__intro">
        <div className="section-label section-label--light">
          <span>06</span>
          <p>Contacto</p>
        </div>
        <p className="eyebrow eyebrow--light">Canal de organización local</p>
        <h2>¿Tienes una pregunta concreta?</h2>
        <p>
          Escríbenos sobre registro, equipos, sede, mentorías o participación
          institucional. Te responderemos con información de la organización local.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Nombre completo</span>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </label>
        <label>
          <span>Correo electrónico</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        <label>
          <span>Teléfono</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </label>
        <label>
          <span>Mensaje</span>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={5}
            required
          />
        </label>
        <button type="submit">
          Enviar mensaje <span aria-hidden="true">→</span>
        </button>
        {status ? <p className="contact-form__status">{status}</p> : null}
      </form>
    </section>
  );
}
