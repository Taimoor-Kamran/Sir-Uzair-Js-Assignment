import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-gray-300"
                  src={require("../../public/asscets/images.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Cathering Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    CATHERING
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam, nam maxime impedit ipsum iste quos eum,
                    aspernatur libero repudiandae sint dolores aut, consectetur
                    fuga commodi pariatur quas. Eius, earum accusamus.
                  </p>
                  <Link href={""}>
                    <p className="leading-relaxed text-blue-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* { Project } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border border-gray-300"
                  src={require("../../public/asscets/images2.jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Sms Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SMS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum, similique id laborum placeat excepturi soluta,
                    necessitatibus autem quasi, quibusdam perspiciatis minima!
                    Neque nihil tempora necessitatibus totam qui, voluptatum
                    facilis! Deleniti!
                  </p>
                  <Link href={""} target="_blank">
                    <p className="leading-relaxed text-blue-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* { Project } */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border border-gray-300"
                  src={require("../../public/asscets/images (1).jpeg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Sms Projects
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    SMS
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum, similique id laborum placeat excepturi soluta,
                    necessitatibus autem quasi, quibusdam perspiciatis minima!
                    Neque nihil tempora necessitatibus totam qui, voluptatum
                    facilis! Deleniti!
                  </p>
                  <Link href={"#"} target="_blank">
                    <p className="leading-relaxed text-blue-500">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
