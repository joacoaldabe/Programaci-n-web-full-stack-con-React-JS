
import '../styles/components/pages/HomePage.css'
const Home = (props) => {
    return (
        <div className="mainDiv">
            <div className="main_ind_container flexCenter holder">
                <div className="mainImg left">
                    <img src="img/banda.png" alt="homeimg"/>
                </div>
                <div className="mainText right">
                    <h1>Sin Tiempo</h1>
                    <p>Es una banda de tres de febrero conformada por amigo que disfrutan compartiendo musica </p>
                    <p>Actualmente tocando covers de rock y pop tanto nacional como internacional.</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Home;