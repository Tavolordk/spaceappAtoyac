'use client';
import { FC } from 'react';
import { useForm } from '../hooks/useForm';

const ContactForm: FC = () => {
  const { formData, status, handleChange, handleSubmit } = useForm({
    fullname: '',
    email: '',
    phone: '',
    mensaje: ''
  });

  return (
    <section id="contacto" className="py-5" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container text-center">
        <h3 className="section-title">Contacto</h3>
        <p>¿Tienes dudas o quieres más información?</p>
        <div className="row justify-content-center">
          <div className="col-md-6 text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label color-primary">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Escribe tu nombre"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label color-primary">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Escribe tu correo"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label color-primary">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Inserta número"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label color-primary">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows={5}
                  name="mensaje"
                  placeholder="Escribe tu comentario"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Enviar
              </button>
              {status && <p className="mt-2">{status}</p>}
            </form>
          </div>
        </div>
        <div className="mt-3">
          <a href="https://www.facebook.com/profile.php?id=61573686727475" className="btn btn-outline-light me-2" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/nasa.space.apps.atoyac/" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
