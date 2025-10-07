import iconEmail from "../../assets/img/icons/email-round-solid-icon.svg";
function EmailContact() {
  return (
    <div>
      <div>
        <p className="super-text mt-11">
          ¿Tienes una idea genial? Cuéntamela en:
        </p>
      </div>
      <div className="flex items-center mt-8">
        <img
          src={iconEmail}
          alt=""
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <h3 className="subtitle ms-5"><a href="mailto:tuemail@correo.com?subject=Hola!&body=Me%20contactarte%20para...">kn.esquivele@gmail.com</a></h3>
      </div>
    </div>
  );
}

export default EmailContact;
