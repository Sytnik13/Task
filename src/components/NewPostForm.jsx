import React from 'react';

import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class NewPostForm extends React.Component {

    handleButtonClick = () => {
        const postName = this.refs.postNameInput.getValue();

        if (!postName)
            return;
        this.refs.postNameInput.refs.input.value = '';
        this.props.onSubmit(postName);

    };

    render() {
        return (
            <Row style={{paddingTop: 20 + 'px'}}>
                <Input
                type="text"
                buttonAfter={<Button onClick = {this.handleButtonClick}>Post</Button>}
                ref='postNameInput'
                placeholder='New post'/>
            </Row>
        );
    }
}
