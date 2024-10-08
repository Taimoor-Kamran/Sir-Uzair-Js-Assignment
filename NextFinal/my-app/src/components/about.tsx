import Link from "next/link";
import Image from "next/image"

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              height={200}
              width={200}
              src={require("../../public/asscets/WhatsApp Image 2024-10-06 at 15.21.24_887af6d2.jpg")}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
              
            </h1>
            <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              facere dicta,<br /> consectetur, consequuntur perspiciatis omnis dolor
              eaque animi eveniet, <br /> ratione voluptatibus repellat voluptatum
              tempora unde soluta aut fugiat <br /> similique laborum?
            </p>
            <p className="mb-5 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              facere dicta, <br /> consectetur, consequuntur perspiciatis omnis dolor
              eaque animi eveniet, <br /> ratione voluptatibus repellat voluptatum
              tempora unde soluta aut fugiat <br /> similique laborum?
            </p>
            <div className="flex justify-center">
              <a href="/asscets/cv/myCv.pdf">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
