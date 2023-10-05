import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contact" className="py-48">
      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
           <span className="text-yellow">CONTACT ME</span>  TO GET STARTED{" "}
          </p>
          <div className="flex md:justify-end my-5">

          <LineGradient width="mx-auto w-2/4" />
          </div>
          
        </div>
      </motion.div>

      {/* FORM AND IMAGE SECTION */}
      
    </section>
  );
};

export default Contact;
