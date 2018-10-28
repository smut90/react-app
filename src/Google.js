import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { validateUser } from './Service'

export default class Google extends React.Component {

    render() {
        const onLoginSuccess = (response) => {
            console.log("Successfully logged in as: ", response.w3.ofa, response.w3.wea);
            let credentials = {
                firstName: response.w3.ofa,
                lastName: response.w3.wea
            }
            validateUser(credentials);
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
                    clientId="257420465530-9g5ic31549qpa1lgunk2heug8bcv042t.apps.googleusercontent.com"
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