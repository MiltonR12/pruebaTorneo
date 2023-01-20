import React from 'react'
import estilos from '../sass/informacion.module.scss';

function Informacion() {
  return (
    <section className={estilos.contInfo} >
      <div className={estilos.parteInto} >
        <h3>Modalidad:</h3>
        <ul>
          <li>Seleccion / Clasica</li>
          <li>Eliminacion Directa</li>
          <li>Virtual</li>
        </ul>
      </div>
      <div className={estilos.parteInto} >
        <h3>Formas de Ganar</h3>
        <h4>DURANTE LOS 15 MINUTOS:</h4>
        <ul>
          <li>Matar 6 veces en total al enemigo.</li>
          <li>Destruir el Nexo enemigo.</li>
          <li>El jugador que haga antes el lord (MEJORADO).</li>
        </ul>
        <br />
        <h4>PASADO LOS 15 MINUTOS:</h4>
        <p>Cabe aclarar que esto se tomara si no cumplen ninguna de las
          anteriores formas de ganar y se dara priopidad segun el orden
          que esta dispuesto.</p>
        <ul>
          <li>1er. El jugador con mas Kills.</li>
          <li>2da. El jugador con mas daño a torres.</li>
          <li>3ra. El jugador con mas oro.</li>
        </ul>
      </div>
      <div className={estilos.parteInto} >
        <h3>REGLAMENTO:</h3>
        <ul>
          <li>No esta permitido el uso de Hacks.</li>
          <li>No se acepta otros expectadores excepto los administradores</li>
          <li>Se permite una pausa de 5 minutos maximo por partida.</li>
        </ul>
      </div>
    </section>
  )
}

export default Informacion