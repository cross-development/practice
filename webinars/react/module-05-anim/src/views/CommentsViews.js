import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Comments from '../components/Comments';
import './CommentsViews.css';
// import styles from './CommentsViews.module.css';

export default class CommentsViews extends Component {
  state = {
    showComments: false,
  };

  toggleComments = () => {
    this.setState(state => ({ showComments: !state.showComments }));
  };

  render() {
    const { showComments } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleComments}>
          {showComments ? 'Hide' : 'Show'} comments
        </button>

        <CSSTransition
          in={showComments}
          classNames="fade"
          // classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <Comments />
        </CSSTransition>
      </>
    );
  }
}
