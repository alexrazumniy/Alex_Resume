import phone from "../assets/contacts_icons/phone.svg";
import email from "../assets/contacts_icons/email.svg";
import telegram from "../assets/contacts_icons/telegram.svg";
import location from "../assets/contacts_icons/location.svg";
import linkedin from "../assets/contacts_icons/linkedin.svg";
import github from "../assets/contacts_icons/github_logo.svg";

const ContactInfo = () => {
  return (
    <div className="contact_info">
      <h2>Contacts</h2>
      <div className="phone flex">
        <img className="phone_img" src={phone} />
        <h4>+380996335644</h4>
      </div>
      <div className="email flex">
        <img className="email_img" src={email} />
        <h4>ncecoexp@gmail.com</h4>
      </div>
      <div className="telegram flex">
        <img className="telegram_img" src={telegram} />
        <h4>@alexx_raz</h4>
      </div>
      <div className="location flex">
        <img className="location_img" src={location} />
        <h4>Kharkiv, Ukraine</h4>
      </div>
      <div className="linkedin flex">
        <img className="linkedin_img" src={linkedin} />
        <h4>linkedin.com/in/alexxraz</h4>
      </div>
      <div className="github flex">
        <img className="github_img" src={github} />
        <h4>github.com/alexrazumniy</h4>
      </div>
    </div>
  );
};

export default ContactInfo;
