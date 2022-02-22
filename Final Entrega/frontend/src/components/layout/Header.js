import '../../styles/components/layout/header.css';

const Header = (props) => {
    
    return (
        <div className="mainHeaderDiv">
            <div className="headerDiv holder">
                <img className="homeimg" src="img/ST.jpg" alt="Logo"/>
                <h1><span className="SinTiempo">Sin Tiempo</span> </h1>
            </div>
        </div>
    );
}

export default Header;