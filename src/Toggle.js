import React from "react";

class Toggle extends React.Component {
  state = { on: true };
  static defaultProps = { onToggle: () => {} };
  
  toggle = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };
  render() {
    return (
      <div>{this.props.children( {on: this.state.on, toggle: this.toggle} )}</div>
    );
  }
}

export default Toggle;
