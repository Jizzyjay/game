import { useContext } from "react";
import Logo from "../assets/logo.png";
import {
  HiOutlineBars3CenterLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <img src={Logo} width={60} height={60} className="hidden md:block" />
      <div className="md:hidden">
        {!theme ? (
          <HiOutlineBars3CenterLeft
            onClick={() => setTheme(!theme)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        ) : (
          <HiOutlineXMark
            onClick={() => setTheme(!theme)}
            className="dark:text-white text-[25px] cursor-pointer"
          />
        )}
      </div>
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-md items-center px-2">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
        />
      </div>
      <div>
        {theme == "dark" ? (
          <BsSunFill
            className="text-[35px] cursor-pointer
            bg-gray-200 text-black p-1 rounded-full "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsMoonFill
            className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
