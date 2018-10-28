import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

export default class Google extends React.Component {

    render() {
        const onLoginSuccess = (response) => {
            console.log("Successfully logged in as: ", response.w3.ofa, response.w3.wea);
        };

        const onLoginFailure = (response) => {
            console.log("Login Failed", response);
        };

        const onLogoutSuccess = () => {
            console.log("Successfully logged out!");
        };

        return (
            <div>
                <GoogleLogin
                    clientId="REPLACE-WITH-YOUR-REGISTERED-APP-ID"
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                />
                <GoogleLogout
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                >
                </GoogleLogout>
            </div>
        );
    }
}