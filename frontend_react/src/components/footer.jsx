import "../styles/footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="carrito">
                <img src="" alt="" />
            </div>

            <section className="redondo_img">
                <img src="../assets/whatsapp.png" alt="" className="img"/>
                <img src="" alt="" className="img"/>
                <img src="" alt="" className="img"/>

                <p>Derechos Reservados &copy; 2024 </p>
            </section>



            <div>
                <p>Numeros de Referencia</p>

                <p>Gerente: 45487894</p>
                <p>Soporte Tecnico: 67562659</p>
            </div>

            <div >
            <p>Politicas de Privacidad</p>
            <p>Terminos de Servicio</p>

            </div>

        </footer>
    )
}

export default Footer
