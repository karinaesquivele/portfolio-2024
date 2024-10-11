import Form from "../molecules/Form";
import Fly from "../molecules/Fly";
function ContactForm() {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-2/5">
        <Fly  />
      </div>
      <div className="w-full md:w-4/5 px-6">
        <Form />
      </div>
    </div>
  );
}

export default ContactForm;
