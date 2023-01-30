import "../Travel.css"

export const Hero = (props) => {
    return (
        <div className="hero">
            <div className="warp_hero">
                <img src={props.item.img} alt="img 01" className="img_01"/>
                    <div className="info_div">
                        <div className="location_link">
                            <img src="./icon.svg" alt="icon" className="icon"/>
                            <p className="location">{props.item.location}</p>
                            <a className="link" href={`${props.item.link}`} target="_blank" >View on Google Maps</a>
                        </div>

                        <div className="hero_title">
                            <h3 className="h_title">{props.item.title}</h3>
                        </div>
                        
                        <div className="hero_date">
                            <h4 className="h_date">{props.item.date}</h4>
                        </div>

                        <div className="hero_des">
                            <p className="h_des">{props.item.des}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}