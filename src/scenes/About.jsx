import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-2 pb-28">
      {/* {Header AND IMAGE SECTION} */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-yellow">ME</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a Full Stack Developer, I bring a versatile set of skills to the
            table. From crafting interactive front-end interfaces that captivate
            users to engineering robust back-end systems that ensure smooth
            functionality, I am your all-in-one solution for web development. My
            proficiency spans the entire web development stack, allowing me to
            seamlessly bridge the gap between design and functionality. With a
            passion for creating elegant, user-friendly experiences, I'm
            dedicated to delivering web solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0 md:w-1/2">
          {" "}
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
      before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="/assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* {SKILLS} */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* {EXPERIENCE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <img src="/assets/icons8-backend-64.png" />
              <p className="font-playfair font-semibold text-4xl mt-3">
                <span className="text-yellow">Front</span>end
              </p>
            </div>
          </div>

          <ul className="font-bold text-lg">
            <div className="flex gap-10 justify-between w-52">
              <li>ReactJs</li>
              <img src="/public/assets/icons8-react-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Tailwind</li>
              <img src="/public/assets/icons8-tailwind-css-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>SCSS</li>
              <img src="/public/assets/icons8-sass-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Nextjs</li>
              <img src="/public/assets/icons8-nextjs-32.png" />
            </div>
          </ul>
        </motion.div>
        {/* {INNOVATIVE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <img
                src="/assets/icons8-database-64.png"
                className="text-white fill-black"
              />
              <p className="font-playfair font-semibold text-4xl mt-3">
                <span className="text-yellow">Back</span>end
              </p>
            </div>
          </div>

          <ul className="font-bold text-lg">
            <div className="flex gap-10 justify-between w-52">
              <li>NodeJs</li>
              <img src="/public/assets/icons8-nodejs-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Express</li>
              <img src="/public/assets/icons8-express-js-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>MongoDb</li>
              <img src="/public/assets/icons8-mongodb-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Postgresql</li>
              <img src="/public/assets/icons8-postgresql-32.png" />
            </div>
          </ul>
        </motion.div>
        {/* {IMMAGINATIVE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <img
                src="/assets/icons8-tools-64.png"
                className="text-white fill-black"
              />
              <p className="font-playfair font-semibold text-4xl mt-3">
                <span className="text-yellow">Tools</span> and
                <span className="text-yellow">Languages</span>
              </p>
            </div>
          </div>

          <ul className="font-bold text-lg">
            <div className="flex gap-10 justify-between w-52">
              <li>Git</li>
              <img src="/public/assets/icons8-git-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Postman</li>
              <img src="/public/assets/icons8-postman-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Javascript</li>
              <img src="/public/assets/icons8-javascript-32.png" />
            </div>
            <div className="flex gap-10 justify-between w-52">
              <li>Typescript</li>
              <img src="/public/assets/icons8-typescript-32.png" />
            </div>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
