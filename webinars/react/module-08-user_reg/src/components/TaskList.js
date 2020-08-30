//Core
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//Components
import TaskListItem from './TaskListItemContainer';
//Redux
import tasksSelectors from '../redux/tasks/tasksSelectors';
//Style
import './TaskList.css';

const TaskList = ({ tasks }) => (
  <TransitionGroup component="ul" className="TaskList">
    {tasks.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames="TaskList-item-fade">
        <TaskListItem id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = state => ({
  tasks: tasksSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(TaskList);
