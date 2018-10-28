import React from 'react';
import Google from './Google'

export default class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>Let's login!!</p>
                <Google />
            </div>
        );
    }
}