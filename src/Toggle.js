import React from 'react';
import {Switch} from './Switch'

class Toggle extends React.Component {
  state = {on: false}
  static defaultProps = {onToggle: () => {}}
  static On = ({ on, children }) => on ? children : null
  static Off = ({ on, children }) => on ? null : children
  static Button = ({on, toggle, ...props}) => {
    return <Switch on={on} onClick={toggle} {...props} />
  }
  toggle = () => {
    this.setState(({on}) => ({on: !on}), () => {
      this.props.onToggle(this.state.on)
    })
  }
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    })
    return <div>{children}</div>
  }
}

export default Toggle
