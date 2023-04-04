import Background from "./lib/backGround";
import ColorBoxes from "./lib/colorBoxes";
import ThemeProvider from "./lib/themeProvider";

export const RTB_Provider = () => {
  return (
    <ThemeProvider>
      <Background>
        <ColorSwitcher />
      </Background>
    </ThemeProvider>
  );
};

export const ColorSwitcher = () => {
  return <ColorBoxes />;
};

export const DarkModeSwitcher = () => {
  return <DarkModeSwitcher />;
};
