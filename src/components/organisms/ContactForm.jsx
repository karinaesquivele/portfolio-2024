//import Form from "../molecules/Form";
import Fly from "../molecules/Fly";
import EmailContact from "../molecules/EmailContact"
import SocialContact from "../molecules/SocialContact";
function ContactForm() {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-2/5">
        <Fly />
      </div>
      <div className="w-full md:w-4/5 px-6">
        {/* <Form /> */}
       <EmailContact/>
        <div>
          <p className="super-text mt-11 mb-5">
            También puedes seguirme en redes sociales:
          </p>
          <SocialContact/>
        </div>
       
      </div>
    </div>
  );
}

export default ContactForm;
