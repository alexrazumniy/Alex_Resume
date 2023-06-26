import telegram_icon from "../assets/social_icons/telegram.png";
import viber_icon from "../assets/social_icons/viber.png";
import whatsapp_icon from "../assets/social_icons/whatsapp.png";
import linkedin_icon from "../assets/social_icons/linkedin.png";
import github_logo from "../assets/social_icons/github_logo.png";
import { ThemeContext, themes } from "../context/ThemeContext";
import Toggle from "../components/ThemeToggler";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a className="social_link">
          <img
            className="social_icon"
            src={telegram_icon}
            alt={telegram_icon}
          />
        </a>
        <a className="social_link">
          <img className="social_icon" src={viber_icon} alt={viber_icon} />
        </a>
        <a className="social_link">
          <img
            className="social_icon"
            src={whatsapp_icon}
            alt={whatsapp_icon}
          />
        </a>
        <a className="social_link">
          <img
            className="social_icon"
            src={linkedin_icon}
            alt={linkedin_icon}
          />
        </a>
        <a className="social_link">
          <img className="social_icon" src={github_logo} alt={github_logo} />
        </a>
      </nav>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <Toggle
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
          />
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Header;
