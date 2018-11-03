import React from 'react';
import LoginPopup from './Modal';
import '../assets/styles/navbar.css'


export default class NavBar extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">A Demo React App</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
                    <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#reviews">Reviews</a>
                            </li>
                        </ul>
                        {/*<a className="btn navbar-btn mx-2 btn-primary shadowed" href="#download">Login</a>*/}
                        <LoginPopup className={"social-signin"} buttonLabel={"Login"} />
                    </div>
                </div>
            </nav>
        );
    }

};
