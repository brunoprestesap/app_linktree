import Image from "next/image";
import Links from "@/components/Links";

import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 md:p-24 bg-gradient-to-r from-green-800 to-green-600">
      <Image
        src="/links/assets/perfil.png"
        alt="foto dra camila"
        width={96}
        height={96}
        loading="lazy"
      />

      <div className="flex flex-col justify-center items-center mt-9">
        <h1 className="font-bold mb-2 text-[20px] text-white">
          Dra Camila Neiva
        </h1>
        <h2 className="text-[14px] text-center text-white">
          Atendimentos em Psiquiatria com ética, conhecimento e acolhimento.
        </h2>
      </div>

      <div className="mt-6 w-full md:w-2/6">
        <Links />
      </div>

      <Link
        href="https://www.instagram.com/camilaneiva.dra"
        className="text-white"
      >
        <FaInstagram size={36} className="mt-6" />
      </Link>
    </main>
  );
}
