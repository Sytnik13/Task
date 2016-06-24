import React from 'react';

import {Button} from 'react-bootstrap';
import {Input} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

export default class PostsList extends React.Component {

  handleNewCommentClick = (post) => {
      console.log(this.refs);
      const postString = post + '';
      for (const refsItem in this.refs) {
          if (refsItem === postString) {
              const commentContent = this.refs[refsItem].getValue();

              if (!commentContent)
                  return;
              this.refs[refsItem].refs.input.value = '';
              this.props.onSubmitComment(post, commentContent);
          }
      }
  };

    render() {
        return (
            <div>
              { this.props.posts.map( post =>
                <div>
                  <div><p>{this.props.userName + ': ' + post.content}</p></div>
                  <Row>
                    <Col xs={4} md={4} mdOffset={1} xsOffset={1}>
                          {post.comments.map( comment =>
                            <div>
                              <p>{this.props.userName + ': ' + comment.content}</p>
                            </div>
                          )}
                          <Input
                          type="text"
                          /* eslint-disable max-len */
                          buttonAfter={<Button onClick = {this.handleNewCommentClick.bind(this, post.id)}>Comment</Button>}
                          ref={post.id}
                          placeholder='New comment'/>
                    </Col>
                  </Row>
                </div>
              )}
            </div>
        );
    }
}
