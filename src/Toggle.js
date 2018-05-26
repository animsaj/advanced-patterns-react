import React from 'react';
import {Switch} from './Switch'
import { ToggleContext } from './index'

class Toggle extends React.Component {
 
  static defaultProps = {onToggle: () => {}}
  static On = ({ children }) => (
    <ToggleContext.Consumer>
      { value => {
        const {on} = value;
        return on ? children : null
      }}
    </ToggleContext.Consumer>
  )
  static Off = ({ children }) => (
    <ToggleContext.Consumer>
      {value => {
        const { on } = value;
        return on ? null : children
      }}
    </ToggleContext.Consumer>
  )
  static Button = ({props}) => (
    <ToggleContext.Consumer>
      {value => {
        const { on, toggle } = value;
        return <Switch on={on} onClick={toggle} {...props} />
      }}
    </ToggleContext.Consumer>
  )
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Toggle
