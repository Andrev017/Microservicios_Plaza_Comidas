import fondoUbicacion from "../assets/fondo_ubicacion.jpg"

const Ubicaion = () => {
    return (
        <div>
            <div className="img_index">
                <img src={fondoUbicacion} alt="" className="img_index" />
            </div>

            <section>
                <h2>Encuentranos en la siguinete ubicación</h2>

                <div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.947459472105!2d-66.17488119491668!3d-17.368788706608864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3753a69106273%3A0x1be122e90b748a0c!2sLincoln%20-%20Plaza%20de%20Comidas!5e0!3m2!1ses-419!2sbo!4v1718431310919!5m2!1ses-419!2sbo"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
            </section>
        </div>
    );
};

export default Ubicaion;
