import React from "react";
import { render } from "react-dom";
import Toggle from "./Toggle";
export const ToggleContext = React.createContext();

const styles = {
  'font-family': 'Arial',
  'font-size': '24px',
  'color': '#222528'
}

class ToggleProvider extends React.Component {
  state = { on: false };
  static defaultProps = {
    onToggle: () => {}
  };
  render() {
    return (
      <ToggleContext.Provider
        value={{
          on: this.state.on,
          toggle: () => {
            this.setState(
              ({ on }) => ({ on: !on }),
              () => {
                this.props.onToggle(this.state.on);
              }
            );
          }
        }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

const App = () => (
  
  <ToggleProvider>
    <Toggle>
      <Toggle.Button />
      <div style={styles}>
      <Toggle.On>
        <p>The switch is on</p>
      </Toggle.On>
      <Toggle.Off>
        <p>The switch is off</p>
      </Toggle.Off>
      </div>
    </Toggle>
  </ToggleProvider>
  
);

render(<App />, document.getElementById("root"));
