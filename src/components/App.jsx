import React from 'react';

import {Grid} from 'react-bootstrap';

import Header from './Header.jsx';
import PostsList from './PostsList.jsx';
import NewPostForm from './NewPostForm.jsx';
import UsersList from './UsersList.jsx';

export default class App extends React.Component {

  state = {
      Valdemar: {
          name: 'Valdemar',
          posts:[{
              id: new Date().getTime(),
              name: 'Valdemar',
              content: 'Hello!',
              comments: []
          }]
      },
      loged: {
          name: 'Valdemar',
          login: false
      },
      currentPage: 'Valdemar',
      users: [{name: 'Valdemar'}]
  };

    handleChangePage = (userName) => {
        this.state.currentPage = userName;

        this.setState(this.state);
    }

    handleUserLogout = () => {
        this.state.loged.login = false;

        this.setState(this.state);
    };

    handleUserCreate = (userName) => {
        this.state.users.push({name: userName});

        this.state[userName] = {
            name: userName,
            id: new Date().getTime(),
            posts: []
        };

        this.state.loged = {
            id: this.state[userName].id,
            name: userName,
            login: true
        };

        this.setState(this.state);
    }

    handlePostSubmit = (postContent) => {
        const posts = this.state[this.state.currentPage].posts;

        posts.push({
            id: new Date().getTime(),
            name: this.state.loged.name,
            content: postContent,
            comments: []
        });
        this.setState(this.state);
    };

    handleCommentSubmit = (postId, commentContent) => {
        const commentSubmit =  this.state[this.state.currentPage].posts.find( post => post.id === postId );

        commentSubmit.comments.push({
            name: this.state.loged.name,
            content: commentContent
        });

        this.setState(this.state);
    };

    render() {
        return (
          <div>
              <Grid>
                  <Header userName={this.state}
                          onCreateUser={this.handleUserCreate}
                          onlogOut={this.handleUserLogout}></Header>
                  <UsersList onChangePage={this.handleChangePage}
                             users={this.state.users}></UsersList>
                  <NewPostForm onSubmit={this.handlePostSubmit}
                               logedStatus={this.state.loged.login}></NewPostForm>
                  <PostsList posts={this.state[this.state.currentPage]}
                             logedStatus={this.state.loged.login}
                             onSubmitComment={this.handleCommentSubmit}></PostsList>
              </Grid>
            </div>
        );
    }
}
