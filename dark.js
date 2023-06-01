class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <div>
        {this.props.render({
          handleChange: this.handleChange,
          darkMode: this.state.darkMode,
        })}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Wrapper
        render={({ handleChange, darkMode }) => {
          let modeClass = darkMode ? "dark-mode" : "light-mode";
          let checked = darkMode ? "checked" : "unchecked";
          return (
            <div className={`box content ${modeClass}`}>
              <h1>Render Props!</h1>
              <p>
                I was build with a two class components. A wrapper that handles
                state and state changing functions, and a child that uses that
                functionality.
              </p>
              <label className="checkbox">
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={handleChange}
                />{" "}
                Dark Mode
              </label>
            </div>
          );
        }}
      />
    );
  }
}

const el = document.querySelector("#root");
ReactDOM.render(<App />, el);
