import '../styles/components/pages/NosotrosPage.css'
const Nosotros = (props) => {
    return (
    <div className="mainDiv">
        <div className="main_nos_container holder">
            <div className="imagenes left">
                <img className="img1" src="img/enzoCordobes.png" alt="Nosotros_1"/>
                <img className="img2" src="img/JoaquinAldabe.jpg" alt="Nosotros_2"/>
                <img className="img3" src="img/AgustinLongo.jpg" alt="Nosotros_3"/>
                <img className="img4" src="img/MartinAquilino.png" alt="Nosotros_3"/>
            </div>
            
            <div className="textos">
                <div className="texto1 right">
                    <h2>Enzo Cordobes.</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eveniet optio praesentium quos atque a doloribus itaque sed ratione, est eum ab, nesciunt quaerat quibusdam ipsam. Odit itaque quidem iure?</p>
                </div>
            
                <div className="texto2 right">
                    <h2>Joaquin Aldabe.</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eveniet optio praesentium quos atque a doloribus itaque sed ratione, est eum ab, nesciunt quaerat quibusdam ipsam. Odit itaque quidem iure?</p>
                </div>
            
                <div className="texto3 right">
                    <h2>Agustin Longo.</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eveniet optio praesentium quos atque a doloribus itaque sed ratione, est eum ab, nesciunt quaerat quibusdam ipsam. Odit itaque quidem iure?</p>
                </div>

                <div className="texto4 right">
                    <h2>Martin Aquilino.</h2> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eveniet optio praesentium quos atque a doloribus itaque sed ratione, est eum ab, nesciunt quaerat quibusdam ipsam. Odit itaque quidem iure?</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Nosotros;