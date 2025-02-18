import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io";

export default function ComponentSection08() {
  return (
    <section
      id="section8"
      className="h-screen snap-start flex  text-white text-3xl"
    >
      <div>
        <h1 className=" flex relative top-3 left-3 bottom-10 pb-10 text-blue-500">
          CONTATOS
        </h1>
        {/* Geral */}
        <div>
          {/* Geral 2 */}
          <div className="flex flex-row   ">
            {/* 3 icone + texto */}
            <div className="flex flex-row gap-4 ">
              <div className="flex flex-row gap-2">
                <BsFillTelephoneFill className="rounded-full h-14 w-14 border-1 p-4 bg-zinc-900" />
                <h1 className="text-sm flex items-center">+55 27 99622-4126</h1>
              </div>

              <div className="flex flex-row gap-2">
                <HiOutlineMail className="rounded-full h-14 w-14 border-1 p-4 bg-zinc-900" />
                <h1 className="text-sm flex items-center">
                  pedrobr2909@gmail.com
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <FaInstagram className="rounded-full h-14 w-14 border-1 p-4 bg-zinc-900" />
                <h1 className="text-sm flex items-center pr-6">
                  pedro_cassemiro14
                </h1>
              </div>
            </div>
            {/* 3 icone */}
            <div className="flex flex-row gap-8 items-center">
              <Link
                className=" text-white text-3xl"
                href="https://www.linkedin.com/home/?mcid=6821526239111716925&gclid=Cj0KCQiA-aK8BhCDARIsAL_-H9kPmsRUV13X13IHGOB5TZ3cIkJuJJMExjZVcba_6gnM516CXoiIcKYaArmvEALw_wcB&cid=&src=go-pa&gclsrc=aw%2Eds&gad_source=1&trk=sem-ga_campid%2E12619604099_asid%2E149519181115_crid%2E725790844702_kw%2Elinkedin_d%2Ec_tid%2Ekwd-148086543_n%2Eg_mt%2Ee_geo%2E9198492&originalSubdomain=br"
              >
                <IoLogoLinkedin />
              </Link>
              <Link className="text-white text-3xl" href="https://github.com/">
                <FaGithub />
              </Link>
              <Link
                className="text-white text-3xl"
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dpt_BR"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
          {/* Contact me */}
          <div>
            {/* Geral */}
            <div>
              <h1 className="py-14">Envie sua mensagem</h1>
              {/* Cima */}
              <div className="grid grid-cols-2 ">
                <div className="m-2">
                  <h1>Nome</h1>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Seu nome"
                    className="bg-transparent text-sm border-b-1 w-full"
                  />
                </div>
                <div className="m-2">
                  <h1>E-mail</h1>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Seu e-mail"
                    className="bg-transparent text-sm border-b-1 w-full"
                  />
                </div>
              </div>
              {/* Esquerda */}
              <div className="m-2">
                <h1>Mensagem</h1>
                <input
                  type="text"
                  name="Mensagem"
                  id="Mensagem"
                  placeholder="Sua mensagem"
                  className="bg-transparent text-sm border-b-1 w-full"
                />
              </div>
              {/* Botão */}
              <div className=" flex justify-center">
                <Button className="bg-zinc-900 rounded-full h-40 w-40 border-white border-1 mt-14">
                  <h1 className="text-white">ENVIAR</h1>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
