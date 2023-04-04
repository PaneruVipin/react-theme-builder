import { useContext, useEffect } from "react";
import { ThemeContext } from "./themeProvider";
import { randomData } from "common-coding-tools/random";
import { themeColors } from "./themeColors";

export default  ({ ...props }) => {

  const { theme, setTheme } = useContext(ThemeContext);
  const handleColorClick = (data) => {
    const newTheme = { ...theme, ...data };
    setTheme(newTheme);
  };
  const handleRandomClick = () => {
    const color = randomData(themeColors);
    handleColorClick({
      color: color?.color,
      backGround: color?.backGround,
    });
  };
  return (
    <div className="p-2 space-y-2 rounded-md border shadow-md bg-white dark:bg-black">
      <p>Color Themes</p>
      <div className="flex flex-wrap gap-x-3  gap-y-2">
        <div
          onClick={handleRandomClick}
          title={"Random"}
          className={` w-20 h-20 flex justify-center items-center  ring-black ring-offset-2 ring-offset-white dark:ring-offset-black dark:ring-white bg-gradient-to-tr rounded-md cursor-pointer shadow-md bg-cyan-900
                     
                    `}
        >
          Random
        </div>
        {themeColors.map(({ backGround, color, id }) => (
          <div
            onClick={() =>
              handleColorClick({
                backGround,
                color,
              })
            }
            title={color}
            className={` w-20 h-20  ring-black ring-offset-2 ring-offset-white dark:ring-offset-black dark:ring-white rounded-md cursor-pointer shadow-md bg-gradient-to-br ${backGround} ${
              theme.color?.bg == color?.bg && "ring-1"
            }`}
            key={id}
          ></div>
        ))}
      </div>
    </div>
  );
};
