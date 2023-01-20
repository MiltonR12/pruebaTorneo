import copaTorneo from '../img/copaTorneo.png';
import estilos from '../sass/copa.module.scss';

function Copa() {
  return (
    <div className={estilos.contCopa} >
      <div>
        <img src={copaTorneo} alt="" width={200} className={estilos.imgCopa} />
        <h2>INFORMACION DEL TORNEO</h2>
      </div>
    </div>
  )
}

export default Copa