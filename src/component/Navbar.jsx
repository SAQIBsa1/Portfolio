import logo from "../assets/download.png";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-centre justify-between py-1">
      <div className="flex flex-shrink-0 items-centre ">
        <img className="mx-3 w-12" src={logo} alt="logo" />
       </div>
       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
       </div>
    </nav>
  );
};

export default Navbar;
