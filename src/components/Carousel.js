import React from 'react';
import Review2 from '../assets/images/reviews_logo_2.png';
import Review3 from '../assets/images/reviews_logo_3.png';
import '../assets/styles/carousel.css';


export default class Carousel extends React.Component {

    render() {

        return (
            <div className="common pb-5 section text-center" id="reviews">
                <div className="container" >
                    <div className="hr-wrapper">
                        <hr />
                    </div>
                    <div className="row pt-5">
                        <div className="col-12">
                            <div id="carousel" className="carousel slide" data-ride="carousel" data-interval={5000}>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img src={Review2} className="img-block mx-auto my-3 d-block" width={250} data-holder-rendered="true" />
                                        <div className="blockquote ">
                                            <p className="m-0">I can barely imagine my life without React</p>
                                            <div className="blockquote-footer">Spider Man</div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Review3} className="img-fluid my-3 mx-auto d-block" width={250} data-holder-rendered="true" />
                                        <div className="blockquote ">
                                            <p className="m-0">React sets a new standard for apps.</p>
                                            <div className="blockquote-footer">AppMaker</div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={Review2} className="img-fluid my-3 mx-auto d-block" width={250} data-holder-rendered="true" />
                                        <div className="blockquote ">
                                            <p className="m-0">Amazing, unique, essential and priceless</p>
                                            <div className="blockquote-footer">Wonder Woman</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};
