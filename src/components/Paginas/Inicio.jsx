import ReactPlayer from 'react-player'
import Footer from '../Footer/Footer'


const Inicio = () => {
  return (
    <div className="App" style={{ backgroundColor: " #f3f2f0 " }}>
      <h1 style={{ textAlign: "center" }}>MARVEL STUDIOS </h1>
      <div className="container" style={{
        width: '70%', height: '70%', position: 'center',
        textAlign: "justify"
      }}>
        <p >
          Marvel Studios, LLC (conocida como Marvel Films de 1993 a 1996) es un
          estudio cinematográfico estadounidense que tiene su sede en los Walt Disney
          Studios de Burbank (California, Estados Unidos), el estudio es una filial de The Walt Disney Company.
          Es conocido por producir el Universo cinematográfico de Marvel,
          basado en los personajes de Marvel Comics.
          Marvel Studios también está produciendo series de televisión que se transmiten en Disney+ y
          supervisaron la producción de las series restantes de Marvel Television luego de su incorporación a
          Marvel Studios. </p>
      </div>

      <div className="container" style={{ width: '70%', height: '70%', position: 'center' }}>
        <h3>Proximos estrenos:</h3>
        <ul >
          <li>Secret Invasion | Fecha: 23 de Junio del 2023.</li>
          <li>Echo | Fecha: Verano del 2023.</li>
          <li>Loki T2 | Fecha: Verano del 2023.</li>
          <li>Ironheart T2 | Fecha: Otoño del 2023.</li>
          <li>The Marvels | Fecha: 10 de Noviembre del 2023.</li>
          <li>Daredevil: Born Again | Fecha: Primavera del 2023.</li>
          <li>Capitán América 4 | Fecha: 04 de mayo del 2024.</li>
          <li>Thunderbolts | Fecha: 26 de Junio del 2024.</li>
          <li>Blade | Fecha: 06 de Septiembre del 2024.</li>
        </ul>
      </div>
      <div className="container" style={{ width: '70%', height: '70%', position: 'center' }}>
        <h3>Pelicula de estreno:</h3>
        <h5>SPIDERMAN ACROSS THE SPIDERVERSE | Trailer Oficial | Sub-español.</h5>
        <ReactPlayer
          url={('../src/Videos/SPIDERMAN ACROSS THE SPIDERVERSE.mp4')}
          width='70%'
          height='70%'
          controls
        />
        <div className="container" style={{
          width: '100%', height: '100%',
          textAlign: "justify"
        }}>
          <h4>Premisa:</h4>
          <p><small>Más de un año después de los eventos de Spider-Man: un nuevo universo (2018), Miles Morales es inesperadamente abordado por su interés amoroso Gwen Stacy
            para completar una misión para salvar cada universo de Spider-People de la Mancha, un peligroso, pero antagonista sin experiencia, que podría causar un desastre catastrófico.
            Miles está listo para el desafío, donde él y Gwen viajan juntos a través del Multiverso y conocen a sus protectores, un grupo de Spider-People conocido como Spider-Society, liderado por Miguel O Hara.
            Sin embargo, Miles se encuentra en desacuerdo con Miguel y la Spider-Society sobre cómo manejar la amenaza y
            debe redefinir lo que significa ser un héroe para poder salvar a sus seres queridos y a la gente.</small></p>

          <h4>01 de Junio del 2023 | Solo en cines</h4>
          <p></p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Inicio
