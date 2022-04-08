import React, {Component} from "react";
import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class Carousel extends Component {
    constructor() {
        super();
        this.state = {data: []};
    }

    componentDidMount() {
        fetch(`https://fe-student-api.herokuapp.com/api/hotels/popular`)
            .then(res => res.json())
            .then(json => this.setState({data: json}));
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 600,
            className:'carousel',
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.state.data.map(el => (
                        <div key={el.id}>
                            <img className="houses-img" src={el.imageUrl} alt={el.name}/>
                            <div className="houses-card-text">
                                <h4>{el.name}</h4>
                                <p className="houses-card-text-location">{el.city}, {el.country}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Carousel