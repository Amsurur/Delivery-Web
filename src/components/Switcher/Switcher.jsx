import { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: "48%",
        cy: "33%",
      },
      svg: {
        transform: "rotate(-10deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "200%",
        cy: "0%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={50}
          animationProperties={defaultProperties}
          moonColor={"red"}
          sunColor={"yellow"}
        />
      </div>
    </>
  );
};
export default Switcher;
