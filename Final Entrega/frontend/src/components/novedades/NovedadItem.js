import '../../styles/components/pages/NovedadesPage.css'
import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedadesContainer holder">
            
            <div className="novedad">
                <img className="left novedad_img" src={imagen}/>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                
                <div dangerouslySetInnerHTML={{ __html: body}} />
                <hr />
            </div>
            
        </div>
    );
}

export default NovedadItem;