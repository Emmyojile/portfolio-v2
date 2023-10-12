import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Project = ({title}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transistion duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, laudantium.
                </p>
            </div>
            <img src={`/assets/${projectTitle}.png`} alt={projectTitle} className="object-cover w-full h-48"/>
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Explore my portfolio of innovative projects showcasing my diverse
          skill set as a Full Stack Developer. Each project is a testament to my
          passion for creating meaningful digital experiences. Dive in and
          discover the world I've built, one project at a time.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
            {/* ROW */}
            <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                BEAUTIFUL USER INTERFACES
            </div>
            <Project title="admin"/>
            <Project title="bloodbank"/>

            {/* ROW 2 */}
            <Project title="booking"/>
            <Project title="e-commerc"/>
            <Project title="blog"/>

            {/* ROW 3 */}
            <Project title="restaurant"/>
            <Project title="portfolio"/>
            
            <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                SMOOTH USER EXPERIENCE
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
