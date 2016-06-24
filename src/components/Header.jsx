import React from 'react';

import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';



export default class Header extends React.Component {



    render() {
        console.log(this.props);
        return (
          <Row>
              <Col xs={3} md={3}>
                  <h1>Mini Twitter</h1>
              </Col>
              <Col xs={1} md={1} mdOffset={8} xsOffset={8}>
                  <p>{this.props.userName}</p>
                  <Button bsStyle="link">Log out</Button>
              </Col>
          </Row>
        );
    }
}
