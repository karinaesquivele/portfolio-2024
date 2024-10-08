import React, { useState } from "react";
import FormValidator from "../../utils/validations";
import { postFormData } from "../../utils/api";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el campo en específico
    let validator = new FormValidator({ [name]: value });
    let validationErrors = validator.validate();

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      // Si no hay errores para este campo, eliminar el mensaje de error
      if (!validationErrors[name]) {
        delete updatedErrors[name];
      } else {
        updatedErrors[name] = validationErrors[name];
      }

      return updatedErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validator = new FormValidator(formData);
    const validationErrors = validator.validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await postFormData(formData);
        setResponseMessage("Formulario enviado con éxito!");
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
        setErrors({});
      } catch (error) {
        setResponseMessage("Hubo un error al enviar el formulario.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
        />
        {errors.mensaje && <p>{errors.mensaje}</p>}
      </div>
      <button type="submit">Enviar</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

export default ContactForm;
