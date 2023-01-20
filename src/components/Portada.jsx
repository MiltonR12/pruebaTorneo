import estilos from '../sass/portada.module.scss';

function Portada() {
  return (
    <section className={estilos.contPortada} >
      <div className={estilos.contendor} >
        <h1 className={estilos.title} >Torneo <span>FLSDJLJDSKLJ</span> </h1>
        <button className={estilos.btn} ><span>INSCRIBIRSE</span></button>
      </div>
    </section>
  )
}

export default Portada