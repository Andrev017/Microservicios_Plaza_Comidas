import "../styles/index.css"
import imgFondo from "../assets/fondo_home.jpg"

const Index = () => {
  
  return (
    <div>
      <section>
        <div className="texto_content">
          <h2 className="tit2">DISFRUTA DE NUESTROS</h2>

          <h1 className="tit1">RESTAURANTES</h1>

          <h3 className="tit3">Encuentra tu plato favorito</h3>
        </div>

        <div className="img_index">
          <img src={imgFondo} alt="" className="img_index" />
        </div>
      </section>


        <h2>Productos recomendados</h2>


      <div>
        
        <div className="cards">
          <img src="" alt="" />
          <h2>Producto_1</h2>

        </div>


      </div>




    </div>
  )
}



export default Index
