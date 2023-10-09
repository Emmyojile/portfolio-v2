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
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl">
            ABOUT <span className="text-red">ME</span>
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

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-3/5 before:h-full before:border-2 before:border-blue before:z-[-1] flex gap-8">
              <img
                alt="skills"
                className="z-10 w-3/5"
                src="/assets/about.jpeg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/assets/about.jpeg" />
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
              {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
              <img src="/assets/frontend.png"/>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frontend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor
            nulla deleniti ipsam recusandae nesciunt.
          </p>
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
              {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
              <img src="/assets/backend.png"/>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Backend
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
          </p>
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
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Immaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor
            nulla deleniti ipsam recusandae nesciunt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
