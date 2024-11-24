import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              className="w-[50px] rounded-full"
              src={require("../../public/asscets/360_F_350383998_3ieK8oBG3FgZkvHHnGmWkQQfSau6tVmn.jpg")}
              alt="Muhammad Taimoor"
              width={100}
              height={100}
            ></Image>
            <span className="ml-3 text-xl">TAIMOOR</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"#skill"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-blue-600">
              Contact
            </Link>
          </nav>
            <a href="/asscets/cv/myCv.pdf">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download Cv
              <AiOutlineCloudDownload className="text-lg ml-2" />
          </button>
            </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
