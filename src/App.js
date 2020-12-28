import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <TimersDashboard />
      </div>
    );
  }
}

class TimersDashboard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}

class EditableTimerList extends React.Component {
  render() {
    return (
      <div>
        <EditableTimer
          title='Learn React'
          project='Web Domination'
          elasped='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn extreme ironing'
          project='World Domination'
          elapsed='3890985'
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    );
  }
}

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen) {
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      );
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elasped={this.props.elasped}
          runningSince={this.props.runningSince}
        />

      );
    }
  }
}

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div>
        <div>
          <div>
            <div>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </div>
            <div>
              <label>Title</label>
              <input type='text' defaultValue={this.props.project} />
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
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    //const elapsedString = helpers.renderElapsedString(this.props.elapsed);
    const elapsedString = '15:2:3';
    return (
      <div>
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
      </div>
    );
  }
}
class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <div>
          <button>close</button>
        </div>
      );
    }
  }
}


export default App;