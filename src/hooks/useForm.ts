"use client";

import { useState } from "react";

export interface ContactFormData {
  fullname: string;
  email: string;
  phone: string;
  mensaje: string;
}

export function useForm(initialState: ContactFormData) {
  const [formData, setFormData] = useState<ContactFormData>(initialState);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkgazn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("No fue posible enviar el mensaje.");
      }

      setStatus(
        "Mensaje enviado correctamente. Te responderemos a la brevedad.",
      );
      setFormData(initialState);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el mensaje.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    status,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}
