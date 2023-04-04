import { toggleDarkMode } from "./darkMode";

export default ({ children }) => {
  return <div onClick={toggleDarkMode}>{children}</div>;
};
