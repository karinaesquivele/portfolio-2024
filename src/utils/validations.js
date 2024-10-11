// validations.js
class FormValidator {
    constructor(formData) {
      this.formData = formData;
      this.errors = {};
    }
  
    validateName() {
      const { nombre } = this.formData;
      const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
      if (!nombre || nombre.trim().length === 0) {
        this.errors.nombre = "El nombre es obligatorio.";
      } else if (!nameRegex.test(nombre)) {
        this.errors.nombre = "El nombre solo debe contener letras.";
      } else if (nombre.length < 3) {
        this.errors.nombre = "El nombre debe tener al menos 3 caracteres.";
      }
    }
  
    validateEmail() {
      const { email } = this.formData;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || email.trim().length === 0) {
        this.errors.email = "El email es obligatorio.";
      } else if (!emailRegex.test(email)) {
        this.errors.email = "El formato del email es incorrecto.";
      }
    }
  
    validateMessage() {
      const { mensaje } = this.formData;
      const messageRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/;
      if (!mensaje || mensaje.trim().length === 0) {
        this.errors.mensaje = "El mensaje es obligatorio.";
      } else if (!messageRegex.test(mensaje)) {
        this.errors.mensaje = "El mensaje solo debe contener letras y números.";
      } else if (mensaje.length < 10) {
        this.errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
      }
    }
  
    validate() {
      this.errors = {};
      this.validateName();
      this.validateEmail();
      this.validateMessage();
      return this.errors;
    }
  }
  
  export default FormValidator;
  