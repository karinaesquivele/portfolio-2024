import Typography from "../atoms/Typography";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <div className="contact">
      <div className="px-9 w-full pb-1">
        <Typography variant="title"><span className="block text-center">Contacto</span></Typography>
      </div>
      <ContactForm/>
    </div>
  );
}

export default Contact;