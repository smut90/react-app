import React from 'react';
import '../assets/styles/MainSection.css'
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';
import CoverImg from '../assets/images/cover.jpg';
import FrontImg from '../assets/images/cover_front.png';
import FeaturesImg from '../assets/images/features.png';

export default class MainSection extends React.Component {

    render () {

        return (
            <div className="wrapper">
                <NavBar/>
                <div className="common section-fade-out pt-5" style={{backgroundImage: 'url("' + CoverImg + '")' }}>
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-md-6 my-5 text-lg-left text-center align-self-center">
                                <h1 className="display-2">React JS</h1>
                                <p className="lead">Everything you need to know about react</p>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid d-block mx-auto" src={FrontImg} width={400} /> </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 common" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="pb-4">Features from the future</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="align-self-center text-md-right text-center col-lg-4 col-md-6">
                                <h4 className="text-primary">Open-Source</h4>
                                <p className="mb-5 text-muted">Creativity has no price tag</p>
                                <h4 className="text-primary">JS library</h4>
                                <p className="mb-5 text-muted">JS library for building user interfaces</p>
                                <h4 className="text-primary">Declarative</h4>
                                <p className="mb-5 text-muted">Declarative views make your code more predictable, simpler to understand, and easier to debug</p>
                            </div>
                            <div className="my-3 col-md-4 d-none d-lg-block animate-in-down">
                                <img className="img-fluid d-block mx-auto" src={FeaturesImg} width={300} /> </div>
                            <div className="align-self-center text-md-left text-center col-lg-4 col-md-6">
                                <h4 className="text-primary">Component Based</h4>
                                <p className="mb-5 text-muted">Build encapsulated components that manage their own state, then compose them to make complex UIs</p>
                                <h4 className="text-primary">Learn Once, write anywhere</h4>
                                <p className="mb-5 text-muted">Rich documentation on how to start from scratch and build enterprise applications</p>
                                <h4 className="text-primary">Spread the word</h4>
                                <p className="mb-5 text-muted">Spreading the word, so everyone will start using react</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel />
                <Footer />
            </div>
        );
    }

};
