import React from 'react';

import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class UsersList extends React.Component {

    handleChangePageClick = (user) => {
        this.props.onChangePage(user.name);
    };

    render() {
        return (
            <Row style={{paddingTop: 20 + 'px'}}>
              {this.props.users.map( user =>
                  <Button onClick = {this.handleChangePageClick.bind(this, user)}>{user.name}</Button>
              )}
            </Row>
        );
    }
}
