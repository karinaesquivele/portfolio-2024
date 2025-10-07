import socialLinkedin from "../../assets/img/icons/icon-linkedin.svg";
import socialGithub from "../../assets/img/icons/icon-github.svg";
import socialBehance from "../../assets/img/icons/icon-behance.svg";
function SocialContact() {
  return (
    <div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/karina-nayeli-esquivel-espinoza-761756196/"
          rel="noreferrer"
          className="inline-block mr-4"
          target="_blank"
        >
          <img src={socialLinkedin} alt="Ícono redondo LinkedIn contact-social" />
        </a>

        <a
          href="https://github.com/karinaesquivele"
          rel="noreferrer"
          className="inline-block mr-4"
          target="_blank"
        >
          <img src={socialGithub} alt="Ícono redondo Github contact-social" />
        </a>
        <a
          href="https://www.behance.net/karinaesquivele"
          rel="noreferrer"
          className="inline-block"
          target="_blank"
        >
          <img src={socialBehance} alt="Ícono redondo Behance contact-social" />
        </a>
      </div>
    </div>
  );
}

export default SocialContact;
