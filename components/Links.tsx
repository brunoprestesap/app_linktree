import React from "react";
import BtnLink from "./BtnLink";

import { FaBookMedical } from "react-icons/fa";
import { GiVideoConference } from "react-icons/gi";
import { FaChrome } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { SiGooglemaps } from "react-icons/si";

const Links = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-2 md:gap-4">
      <BtnLink
        description="Agendamento Presencial"
        img=<FaBookMedical size={28} />
        link="http://wa.me/5596991354590"
      />

      <BtnLink
        description="Agendamento - Telemedicina"
        img=<GiVideoConference size={28} />
        link="http://wa.me/5596991354590"
      />

      <BtnLink
        description="Acesse nosso site"
        img=<FaChrome size={28} />
        link="http://www.dracamilaneiva.com.br"
      />

      <BtnLink
        description="Guia completo de Higiene do Sono"
        img=<GiNightSleep size={28} />
        link="https://hotmart.com/pt-br/marketplace/produtos/guia-completo-de-higiene-do-sono/W83207049T"
      />

      <BtnLink
        description="Instituto Amparo - Como chegar"
        img=<SiGooglemaps size={28} />
        link="https://maps.app.goo.gl/hM5ZMwv3S2pMDQ7V7?g_st=iw"
      />
    </div>
  );
};

export default Links;
