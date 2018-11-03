import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Login from './Login'

class LoginPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        <div class="text-center" >
                            <h3 class="white-text">
                                <i class="fa fa-user white-text"></i> Sign in
                            </h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default LoginPopup;