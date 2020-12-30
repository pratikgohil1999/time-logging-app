import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div className='App' style={{ width: '20rem' }}>
        <TimersDashboard />
      </div>
    );
  }
}

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Pratice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };
  render() {
    return (
      <div>
        <div>
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.elapsed}
      />
    ));
    return (
      <div id='timers'>
        {timers}
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  state = {
    editFormOpen: false,
  };
  render() {
    if (this.state.editFormOpen) {
      return (
        <div>
          <TimerForm
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
          />
        </div>
      );
    }
  }
}

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card style={{ width: '18rem' }}>
        <div>
          <div>
            <div>
              <label>Title</label>
              <input type='text'
                value={this.state.title}
                onChange={this.handleTitleChange} />
            </div>
            <div>
              <label>Project</label>
              <input type='text'
                value={this.state.project}
                onChange={this.handleProjectChange} />
            </div>
            <div>
              <button>
                {submitText}
              </button>
              <button>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
    console.log("opening");
  };
  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div>
          <button
            onClick={this.handleFormOpen}>Add</button>
        </div>
      );
    }
  }
}


class Timer extends React.Component {
  render() {
    //const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    const elapsedString = '15:20:03';
    return (
      <Card style={{ width: '18rem' }}>
        <div>
          <div>
            {this.props.title}
          </div>
          <div>
            {this.props.project}
          </div>
          <div>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div>
            <span>
              <button>edit</button>
            </span>
            <span>
              <button>trash</button>
            </span>
          </div>
        </div>
        <div>
          <button>
            Start
          </button>
        </div>
      </Card>
    );
  }
}

export default App;