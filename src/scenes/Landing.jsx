import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import MyResume from "./../assets/better_resume_v2.pdf";
import Resume from "./../assets/ACTIVE_RESUME.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* {IMAGE SECTION} */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-14 before:-left-20 before:rounded-b-[400px] before:w-full before:max-w-[400] before:h-full before:border-2 before:border-grey before:z-[-1]">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transistion duration-500 z-10 w-full max-w-[400px] md:max-w-[500px] rounded-b-[400px]"
              src="/assets/Dp.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="hover:filter hover:saturate-200 transistion duration-500 z-10 w-full max-w-[400px] md:max-w-[500px] rounded-b-[400px]"
            src="/assets/Dp.jpg"
          />
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start">
            FullStack {""}
            <span
              className="xs:relative xs:text-yellow xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Developer
            </span>
          </p>

          <p className="mt-10 mb-7 text-2xl text-center md:text-start">
            Hi, I'm{" "}
            <span
              className="xs:relative xs:text-yellow xs:font-semibold z-20 
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Emmanuel Ojile
            </span>{" "}
            from Nigeria a software engineer Crafting Innovative Web Solutions
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-rainblue text-white rounded-sm py-3 px-7 hover:bg-blue hover:text-black transition duration-500 border-y-grey border-2 ss:text-xs"
            href={Resume} // Ensure that this variable points to your PDF file
            download="MyResume.pdf" // Ensure the correct file extension
          >
            DOWNLOAD CV
          </a>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-grey hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 md:text-sm ss:text-xs">
              CONTACT ME
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
