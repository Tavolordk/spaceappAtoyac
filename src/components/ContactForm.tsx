"use client";

import { useForm } from "@/hooks/useForm";

export default function ContactForm() {
  const {
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm({
    fullname: "",
    email: "",
    phone: "",
    mensaje: "",
  });

  return (
    <section className="contact section" id="contact">
      <div className="section__inner contact__layout">
        <div className="contact__intro">
          <p className="eyebrow eyebrow--light">Contacto</p>
          <h2>¿Tienes una duda antes de participar?</h2>
          <p>
            Escríbenos sobre registro, equipos, sede, mentorías o participación
            como aliado.
          </p>
          <div className="contact__social">
            <a
              href="https://www.facebook.com/profile.php?id=61573686727475"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.instagram.com/nasa.space.apps.atoyac/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label>
              <span>Nombre completo</span>
              <input
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
          </div>

          <label>
            <span>Teléfono</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </label>

          <label>
            <span>Mensaje</span>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              required
            />
          </label>

          <button className="button button--aqua" disabled={isSubmitting}>
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
            <span aria-hidden="true">→</span>
          </button>

          {status ? <p className="contact-form__status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
