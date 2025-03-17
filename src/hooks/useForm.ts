'use client';

import { useState } from 'react';

interface FormData {
  fullname: string;
  email: string;
  phone: string;
  mensaje: string;
}

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/mvgkgazn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('¡Mensaje enviado correctamente, te contestaremos a la brevedad posible!');
        setFormData(initialState);
      } else {
        setStatus('Error al enviar el mensaje.');
      }
    } catch (error) {
      setStatus(`Error al enviar el mensaje: ${error instanceof Error ? error.message : ''}`);
    }
  };

  return { formData, status, handleChange, handleSubmit };
};
