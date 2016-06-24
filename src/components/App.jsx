import React from 'react';

import {Grid} from 'react-bootstrap';

import Header from './Header.jsx';
import PostsList from './PostsList.jsx';
import NewPostForm from './NewPostForm.jsx';

export default class App extends React.Component {

  state = {
      Valdemar: {
          name: 'Valdemar',
          posts:[]
      }
  };

    handlePostSubmit = (postContent) => {
        const posts = this.state.Valdemar.posts;

        posts.push({
            id: new Date().getTime(),
            content: postContent,
            comments: []
        });

        this.setState(this.state);
    };

    handleCommentSubmit = (postId, commentContent) => {
        const commentSubmit =  this.state.Valdemar.posts.find( post => post.id === postId );

        commentSubmit.comments.push({
            content: commentContent
        });

        this.setState(this.state);
    };

    render() {
        return (
          <div>
              <Grid>
                  <Header userName={this.state.Valdemar.name}></Header>
                  <NewPostForm onSubmit={this.handlePostSubmit}></NewPostForm>
                  <PostsList posts={this.state.Valdemar.posts}
                             userName={this.state.Valdemar.name}
                             onSubmitComment={this.handleCommentSubmit}></PostsList>
              </Grid>
            </div>
        );
    }
}
