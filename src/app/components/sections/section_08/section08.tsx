import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

export default function ContactSection() {
  return (
    <section
      id="section8"
      className="h-screen snap-start flex items-center  text-white "
    >
      <div className="container mx-auto px-4 pb-40">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 border-b border-blue-500 pb-2 inline-block">
          CONTATOS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>

              <div className="flex flex-col space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 group-hover:bg-blue-500 transition-colors duration-300">
                    <BsFillTelephoneFill className="h-6 w-6" />
                  </div>
                  <a
                    href="tel:+5527996224126"
                    className="text-base md:text-lg hover:text-blue-400 transition-colors"
                  >
                    +55 27 99622-4126
                  </a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 group-hover:bg-blue-500 transition-colors duration-300">
                    <HiOutlineMail className="h-6 w-6" />
                  </div>
                  <a
                    href="mailto:pedrobr2909@gmail.com"
                    className="text-base md:text-lg hover:text-blue-400 transition-colors"
                  >
                    pedrobr2909@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 group-hover:bg-blue-500 transition-colors duration-300">
                    <FaInstagram className="h-6 w-6" />
                  </div>
                  <a
                    href="https://instagram.com/pedro_cassemiro14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg hover:text-blue-400 transition-colors"
                  >
                    pedro_cassemiro14
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
              <div className="flex gap-6">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 hover:bg-blue-500 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 hover:bg-blue-500 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full h-14 w-14 border border-blue-500 flex items-center justify-center bg-zinc-900 hover:bg-blue-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-8">Envie sua mensagem</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Seu nome"
                    className="bg-transparent text-base border-b border-zinc-700 w-full p-2 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu e-mail"
                    className="bg-transparent text-base border-b border-zinc-700 w-full p-2 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="mensagem" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  placeholder="Sua mensagem"
                  rows={4}
                  className="bg-transparent text-base border-b border-zinc-700 w-full p-2 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-8 py-6 transition-all duration-300 transform hover:scale-105"
                >
                  <IoIosSend />
                  ENVIAR MENSAGEM
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
