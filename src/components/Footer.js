import React from 'react';
import '../assets/styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends React.Component {

    render() {

        return (
            <div className="cust-font py-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="lead">Sign up to our newsletter for the latest news</p>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your e-mail here" /> </div>
                                <button type="submit" className="btn ml-2 btn-outline-primary">Subscribe</button>
                            </form>
                        </div>
                        <div className="col-4 col-md-1 align-self-center my-3">
                            <FontAwesomeIcon icon={faFacebook} fixedWidth size='3x' style={{ color: 'white' }} />
                        </div>
                        <div className="col-4 col-md-1 align-self-center my-3">
                            <FontAwesomeIcon icon={faTwitter} fixedWidth size='3x' style={{ color: 'white' }}  />
                        </div>
                        <div className="col-4 col-md-1 align-self-center my-3">
                            <FontAwesomeIcon icon={faInstagram} fixedWidth size='3x' style={{ color: 'white' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 my-3 text-center">
                            <p className="text-muted">© Copyright 2018&nbsp; - All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};
