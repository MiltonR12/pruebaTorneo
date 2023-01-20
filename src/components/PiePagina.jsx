import estilos from '../sass/piePagina.module.scss';
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";

function PiePagina() {
  return (
    <footer className={estilos.contPie} >
      <p>Dime Legends </p>
      <AiFillFacebook />
      <AiOutlineWhatsApp />
      <RxDiscordLogo />
    </footer>
  )
}

export default PiePagina