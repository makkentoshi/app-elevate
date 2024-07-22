import Image from "next/image";
import logoImage from "../public/logosaas.png";
import MenuIcon from "../public/menu.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87Bff,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md"></div>

            <Image
              src={logoImage}
              alt="logo"
              className="w-12 h-12 relative"
            ></Image>
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white"></MenuIcon>
          </div>
          <nav className=" gap-6 items-center hidden sm:flex">
            <Link
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all "
            >
              About
            </Link>
            <Link
              href=""
              className="text-opacity-60 text-white  hover:text-opacity-100 transition-all"
            >
              Features
            </Link>
            <Link
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Updates
            </Link>
            <Link
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Help
            </Link>
            <Link
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition-all"
            >
              Customers
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
