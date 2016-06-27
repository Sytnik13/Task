import React from 'react';

import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-bootstrap';



export default class Header extends React.Component {

    state = {
        isOpen: false
    };

    getInitialState = () => {
        return { showModal: false };
    };

    close = () => {
        this.setState({ showModal: false });
    };

    open = () => {
        this.setState({ showModal: true });
    };

    handleNewUserClick = () => {
        const userName = this.refs.userNameInput.getValue();

        this.userName = userName;

        if (!userName)
            return;
        this.refs.userNameInput.refs.input.value = '';
        this.props.onCreateUser(userName);
        this.close();
    };

    handleLoginButtonClick = () => {
        if (this.props.userName.loged.login === false) {
            this.open();
        } else {
            this.userName = '';
            this.props.onlogOut(false);
        }
    };

    render() {
        return (
          <div>
          <div>
            <Row>
                <Col xs={3} md={3}>
                    <h1>Mini Twitter</h1>
                </Col>
                <Col xs={1} md={1} mdOffset={8} xsOffset={8}>
                    <p>{this.userName}</p>
                    <Button bsStyle="link" onClick={this.handleLoginButtonClick}>
                        {this.props.userName.loged.login ? 'Log out' : 'Log in'}
                    </Button>
                </Col>
            </Row>
            </div>
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter your name</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Input
                    type="text"
                    buttonAfter={<Button onClick = {this.handleNewUserClick}>Enter</Button>}
                    ref='userNameInput'
                    placeholder='Your name'/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
      </div>
        );
    }
}
