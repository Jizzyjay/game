import { useContext, useEffect } from "react";
import Logo from "../assets/logo.png";
// import SideNavGenreList from "./SideNavGenreList";
import { HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  // const {toggleColorMode, colorMode} = useColorMode();

  useEffect(()=>{
    console.log('THEME--',theme)

  },[theme])

  return (
    <div className="flex items-center p-3">
      <img src={Logo} width={60} height={60} className="hidden md:block" />
      <div className="md:hidden">
      {!theme? <HiOutlineBars3CenterLeft onClick={()=>setTheme(!theme)}
      className="dark:text-white text-[25px] cursor-pointer"/>
      :<HiOutlineXMark onClick={()=>setTheme(!theme)}
      className="dark:text-white text-[25px] cursor-pointer"/>}
      {/* {toggle?
        <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
          <SideNavGenreList/>
          </div>:null
      } */}
      </div>
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-md items-center px-2">
        <HiOutlineMagnifyingGlass/>
        <input type="text" placeholder="Search Games" 
        className="bg-transparent w-full outline-none pl-2 items-center rounded-full"  />
      </div>
      {/* <InputGroup className="mx-8">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input type="text" variant="filled" placeholder="Search" borderRadius={50} />
      </InputGroup> */}
      
      {/* <Switch id="theme"  /> */}
      {/* <Switch colorScheme='green' isChecked={colorMode === 'dark'} 
      onChange={toggleColorMode} /> */}

      {/* <HiOutlineBars3CenterLeft className="text-[30px]" />
      {toggle?
      <div>
         <SideNavGenreList/>
        </div>
       
      :null} */}
      {/* <label className="ml-2">Dark</label> */}
      <div>
      {theme=='dark'?  <BsSunFill className="text-[35px] cursor-pointer
       bg-gray-200 text-black p-1 rounded-full " 
        onClick={()=>setTheme('light')} />
        :
        <BsMoonFill className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full" 
        onClick={()=>setTheme('dark')} />}
      </div>
    </div>
  );
}

export default Navbar;
