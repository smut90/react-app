import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { validateUser } from '../Service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default class Login extends React.Component {

    render() {
        const onLoginSuccess = (response) => {
            console.log("Successfully logged in as: ", response.w3.ofa, response.w3.wea);
            let credentials = {
                firstName: response.w3.ofa,
                lastName: response.w3.wea
            };
            validateUser(credentials);
        };

        const onLoginFailure = (response) => {
            console.log("Login Failed", response);
        };

        return (
            <div>
                <GoogleLogin
                    style={{}}
                    disabledStyle={true}
                    className="btn btn-danger btn-block"
                    clientId="REPLACE-WITH-YOUR-REGISTERED-APP-ID"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                >
                    <FontAwesomeIcon icon={faGoogle} fixedWidth /> Sign in with <b>Google</b>
                </GoogleLogin>
            </div>
        );
    }
}