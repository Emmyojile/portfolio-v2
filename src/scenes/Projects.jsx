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

const projectsData = [
  {
    title: "admin",
    desc: "An administrative panel web application designed for managing admin roles and permissions across multiple projects and applications.",
    githubLink: "https://github.com/Emmyojile/admin_panel.git",
    websiteLink: "https://admin-panel-rosy-two.vercel.app/",
  },
  {
    title: "bloodbank",
    desc: "A blood bank web application that connects donors with hospitals, facilitating blood donations and ensuring a constant supply of life-saving blood.",
    githubLink: "https://github.com/Emmyojile/BloodBank-App.git",
    websiteLink: "https://blood-bank-app-one.vercel.app/",
  },
  {
    title: "bookings-app",
    desc: "A versatile bookings application that simplifies the process of reserving apartments, hotels, and various accommodations across different locations.",
    githubLink: "https://github.com/Emmyojile/bookingApp.git",
    websiteLink: "https://your-bloodbank-website-link.com",
  },
  {
    title: "e-commerc",
    desc: "An e-commerce platform offering a wide range of clothing options for both men and women. Enhance the shopping experience with a wide array of products",
    githubLink: "https://github.com/Emmyojile/Commerce-App.git",
    websiteLink: "https://your-bloodbank-website-link.com",
  },
  {
    title: "blog-app",
    desc: "A dynamic blog application for users to create, edit, and share their thoughts and stories. Engage with your readers and share content effortlessly.",
    githubLink: "https://github.com/Emmyojile/nextjs-blog.git",
    websiteLink: "https://github.com/Emmyojile/nextjs-blog.git",
  },
  {
    title: "restaurant",
    desc: "A convenient restaurant application that allows users to explore menus, place orders, and enjoy a delicious meal from the comfort of their homes.",
    githubLink: "https://github.com/Emmyojile",
    websiteLink: "https://github.com/Emmyojile",
  },
  {
    title: "portfolio",
    desc: "My portfolio website, showcasing my skills and illustrating the value I bring to my career. Explore my projects and expertise in one place.",
    githubLink: "https://github.com/Emmyojile/portfolio-v2.git",
    websiteLink: "https://emmyojile-portfolio-kx7j.onrender.com/",
  },
  // Add more projects here
];

const Project = ({ project }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-[40] transistion duration-500 bg-grey-white z-30 flex flex-col justify-center items-center text-center p-12 text-black`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair font-semibold">{project.title}</p>
        <p className="mt-2 font-semibold text-sm text-black">{project.desc}</p>
        <div className="icons flex cursor-pointer gap-4 mt-3">
          <a href={project.githubLink}>
            <img src="/assets/icons8-github-32 (1).png" />
          </a>
          <a href={project.websiteLink}>
            <img src="/assets/icons8-website-32.png" />
          </a>
        </div>
      </div>
      <img
        src={`/assets/${project.title}.png`}
        // alt={projectTitle}
        className="object-cover w-full h-48"
      />
    </motion.div>
  );
};

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
          className="sm:grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW */}
          <div className="flex justify-center text-center items-center p-10 bg-yellow max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          {projectsData.map((project) => (
            <Project key={project.title} project={project} />
          ))}

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
