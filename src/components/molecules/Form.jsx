import React, { useState } from "react";
import Button from "../atoms/Button";
import FormValidator from "../../utils/validations";
//import { postFormData } from "../../utils/api";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMessage, /*setResponseMessage*/] = useState("");

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
      /* try {
        await postFormData(formData);
        setResponseMessage("Formulario enviado con éxito!");
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
        setInterval(() => {
          setResponseMessage("");
        }, 2000);
        setErrors({});
      } catch (error) {
        setResponseMessage("Hubo un error al enviar el formulario.");
      } */
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className={`form-input ${errors.nombre ? "form-input--error" : ""}`}
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        {errors.nombre && <p className="input-label input-label--error">*{errors.nombre}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          className={`form-input ${errors.nombre ? "form-input--error" : ""}`}
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="input-label input-label--error">*{errors.email}</p>}
      </div>
      <div>
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className={`form-input ${errors.nombre ? "form-input--error" : ""}`}
          value={formData.mensaje}
          onChange={handleInputChange}
        />
        {errors.mensaje && <p className="input-label input-label--error">*{errors.mensaje}</p>}
      </div>

      {/* <button >Enviar</button> */}
      <div className="mt-5 text-center md:text-right">
        <Button variant="primary" size="md" type="submit">
          Enviar
        </Button>
      </div>
      { <p className={`${responseMessage==='Hubo un error al enviar el formulario.' ? "input-label--error" : "input-label"}`}>{responseMessage}</p>}
    </form>
  );
}

export default ContactForm;
