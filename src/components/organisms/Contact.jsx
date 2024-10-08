import Typography from "../atoms/Typography";
import ContactForm from "../molecules/ContactForm";
function Contact() {
  return (
    <div>
      <div className="px-9 w-full pb-1">
        <Typography variant="title">Contacto</Typography>
      </div>
      <ContactForm/>
    </div>
  );
}

export default Contact;