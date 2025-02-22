import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Tasks extends Component {
  state = {task: '', tag: 'HEALTH', taskList: [], selectedTag: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {task, tag} = this.state
    console.log(task)
    console.log(tag)
    if (!task.trim()) {
      alert('Task cannot be empty. Please enter a task.')
      return
    }
    const newTask = {
      id: uuidv4(),
      task,
      tag,
    }
    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      task: '',
      tag: 'HEALTH',
    }))
  }

  onClickButton = event => {
    const selectedTag = event.target.value
    this.setState({selectedTag})
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeTag = event => {
    this.setState({tag: event.target.value})
  }

  render() {
    const {tagsList} = this.props
    const {task, tag, taskList, selectedTag} = this.state
    const filteredTasks = selectedTag
      ? taskList.filter(eachTask => eachTask.tag === selectedTag)
      : taskList

    return (
      <div className="tasks-bg-container">
        <div className="tasks-container">
          <h1 className="tasks-heading">Create a task!</h1>
          <form className="tasks-form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                placeholder="Enter the task here"
                className="input-field"
                onChange={this.onChangeTask}
                value={task}
              />
            </div>
            <div className="input-container">
              <label htmlFor="tags">Tags</label>
              <select
                id="tags"
                className="input-field"
                onChange={this.onChangeTag}
                value={tag}
              >
                {tagsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-button" type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="tasks-list-container">
          <div className="task-list-buttons-section">
            <h1 className="tags-list-heading">Tags</h1>
            {tagsList.map(each => (
              <button
                type="submit"
                className={`tag-buttons ${
                  selectedTag === each.displayText ? 'active-button' : ''
                }`}
                key={each.optionId}
                value={each.optionId}
                onClick={this.onClickButton}
              >
                {each.displayText}
              </button>
            ))}
          </div>
          <div className="tasks-list-tasks-section">
            <h1 className="tags-list-heading">Tasks</h1>
            {filteredTasks.length === 0 ? (
              <p className="no-task-heading">No Tasks Added Yet</p>
            ) : (
              <ul className="task-list-container">
                {filteredTasks.map(eachTask => (
                  <li key={eachTask.id}>
                    <p>{eachTask.task}</p>
                    <p className="tag-item">{eachTask.tag}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks
