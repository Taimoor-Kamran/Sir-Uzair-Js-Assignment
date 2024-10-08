"use client"
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 bg-fixed">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            l am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["DevOps Enginer", "AI Cloud Enginer" ,  "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic
            vel sunt nisi totam impedit,
            <br />
            mollitia deleniti facere distinctio dignissimos repudiandae, nam non
            quo fugit assumenda eveniet, <br /> amet qui architecto!
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="Hero"
            width={500}
            height={500}
            src={require("../../public/asscets/WhatsApp Image 2024-10-06 at 15.21.24_887af6d2.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
