import '../styles/components/pages/GaleriaPage.css'
import Carousel from 'react-bootstrap/Carousel';

const Galeria = (props) => {
    return (
        <div className="mainDiv centerText">
            <h1>Galeria</h1>
            <Carousel className="carouselMain">
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/j7g8SdmWtwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d53-m6INkyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/phyockbF0wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Galeria;