"use client";
import Image from "next/image";
import logoCopter from "@/assets/images/logoCopter.svg";
import Link from "next/link";
import { footerLinks, socialMedia } from "@/constants";
import { motion } from "framer-motion";
import { buttonFooterVariants } from "@/helpers/animations";

const Footer = () => {
  const handleSendEmailClick = () => {
    const email = "support@exchangecopter.com";
    const subject = "Contacto desde Copter";
    const body = "Contenido del correo";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  return (
    <div className="bg-gradient-to-r from-copter-blue-dark to-copter-blue-light padding-x padding-t pb-8">
      <footer className="max-container">
        <div className="flex flex-col items-start gap-20 lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col items-center">
            <Link href={"/"}>
              <Image src={logoCopter} alt="Logo Copter" />
            </Link>
            <div className="mt-8 flex flex-col">
              <motion.button
                variants={buttonFooterVariants}
                whileHover="hover"
                className="mb-2 bg-white text-copter-blue-dark rounded-2xl px-16 py-2.5 font-semibold"
              >
                {/* <Link
                  href={"https://copter-655bc.web.app/registrar"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrarse
                </Link>
              </motion.button>
              <motion.button
                variants={buttonFooterVariants}
                whileHover="hover"
                className="text-white font-semibold mt-4 rounded-2xl py-2.5"
              >
                <Link
                  href={"https://copter-655bc.web.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acceder
                </Link> */}
                <Link
                  href={"#"}
                  rel="noopener noreferrer"
                >
                  Registrarse
                </Link>
              </motion.button>
              <motion.button
                variants={buttonFooterVariants}
                whileHover="hover"
                className="text-white font-semibold mt-4 rounded-2xl py-2.5"
              >
                <Link
                  href={"#"}
                  rel="noopener noreferrer"
                >
                  Acceder
                </Link>
                
              </motion.button>
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-xl font-bold">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.name} className="text-white mt-3">
                      <Link
                        className="text-lg link-underline relative after:bg-white after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                        href={link.link}
                        target={link.target || undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-8 border-t-3 border-white" />

        <div className="mt-4 flex justify-center">
          <button onClick={handleSendEmailClick} className="text-white">
            support@exchangecopter.com
          </button>
        </div>

        <div>
          <ul className="flex justify-center mt-6 gap-6">
            {socialMedia.map((social, index) => (
              <motion.li
                key={index}
                variants={{ hover: { scale: 1.1 } }}
                whileHover="hover"
              >
                <Link
                  href={social.link}
                  target={social.target}
                  rel="noopener noreferrer"
                >
                  <Image src={social.src} alt={social.alt} />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
