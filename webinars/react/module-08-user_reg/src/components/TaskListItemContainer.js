//Core
import { connect } from 'react-redux';
//Components
import TaskListItem from './TaskListItem';
//Redux
import tasksOperations from '../redux/tasks/tasksOperations';
import tasksSelectors from '../redux/tasks/tasksSelectors';

const mapStateToProps = (state, ownProps) => {
  const task = tasksSelectors.getTaskById(state, ownProps.id);

  return {
    ...task,
  };
};

const mapDispatchToProps = (dispatch, { id }) => ({
  onRemove: () => dispatch(tasksOperations.removeTask(id)),
  onToggleCompleted: () => dispatch(tasksOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);
