import React, {Component} from 'react';
import Carousel from './Carousel';

import '../styles/Header.css';
import '../styles/GuestsLoves.css';

class Guests extends Component {
    render() {
        return (
            <div>
                <section className='houses'>
                    <div>
                        <h2 className='houses-title'>Homes guests loves</h2>
                    </div>
                    <div className='houses-carousel'>
                        <div className='houses-cards col-12 col-s-6'>
                            <Carousel />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Guests;