import { ThemeContext, themes } from "../context/ThemeContext";
import Toggle from "../components/ThemeToggler";

const Header = () => {
  return (
    <div className="header">
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
