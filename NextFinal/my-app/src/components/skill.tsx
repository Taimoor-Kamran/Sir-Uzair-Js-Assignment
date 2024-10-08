import { AiOutlineCheckSquare } from "react-icons/ai";

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* SkillS 1 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* SkillS 2 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[92%]"></div>
                  </div>
                  <p className="font-bold text-blue-500 text-right">92%</p>
                </div>
              </div>
            </div>
            {/* SkillS 3 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript / TypeScript
                  </h2>

                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[88%]"></div>
                  </div>
                    <p className="font-bold text-blue-500 text-right">88%</p>
                </div>
              </div>
            </div>
            {/* SkillS 4 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h2>

                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[78%]"></div>
                  </div>
                    <p className="font-bold text-blue-500 text-right">78%</p>
                </div>
              </div>
            </div>
            {/* SkillS 5 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    LINUX / DOCKER / KUBERNATES
                  </h2>

                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                    <p className="font-bold text-blue-500 text-right">60%</p>
                </div>
              </div>
            </div>
            {/* SkillS 6 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckSquare className="font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    AWS
                  </h2>

                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[77%]"></div>
                  </div>
                    <p className="font-bold text-blue-500 text-right">77%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
