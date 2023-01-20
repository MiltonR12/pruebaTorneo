import estilos from '../sass/home.module.scss';
import Portada from '../components/Portada'
import Copa from '../components/Copa';
import Informacion from '../components/Informacion';
import PiePagina from '../components/PiePagina';

function Home() {
  return (
    <>
      <main className={estilos.contHome} >
        <Portada />
        <Copa />
        <Informacion />
      </main>
      <PiePagina />
    </>
  )
}

export default Home