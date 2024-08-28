import email from "../../assets/Icons/paper-plane.png";
import phone from "../../assets/Icons/phone.png";
import Footer from "../Footer";
import SocialMedia from "../Social Media";
import {motion} from "framer-motion";
const ContactPage = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 10 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
     className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-5 md:px-10 py-14 2xl:container mx-auto leading-normal ">
      <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
      <div className="flex flex-col items-center gap-8">
        <SocialMedia />

        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-center gap-4 border-l-2 border-white pl-4 py-2">
            <img src={email} alt="Email" className="w-8 h-8" />
            <h4 className="text-base">raprasannaanbu@gmail.com</h4>
          </div>
          <div className="flex items-center gap-4 border-l-2 border-white pl-4 py-2">
            <img src={phone} alt="Phone" className="w-8 h-8" />
            <h4 className="text-base">+91 6380719807</h4>
          </div>
        </div>

        <form
          method="POST"
          action="mailto:raprasannaanbu@gmail.com"
          encType="multipart/form-data"
          className="flex justify-center"
        >
          <input
            type="submit"
            value="Mail me?"
            className="bg-blue-500 text-base text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
          />
        </form>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-800">
        <Footer />
      </div>
    </motion.div>
  );
};

export default ContactPage;
