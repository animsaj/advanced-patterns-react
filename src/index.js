import React from 'react';
import { render } from 'react-dom';
import Toggle from './Toggle';
import { Switch } from "./Switch";

const On = ({ on, children }) => (on ? children : null);
const Off = ({ on, children }) => (on ? null : children);
const Button = ({ on, toggle, ...props }) => {
  return <Switch on={on} onClick={toggle} {...props} />;
};

const App = () => (
  <Toggle>
  {({on, toggle}) => (
    <React.Fragment>
      <Button on={on} toggle={toggle} />
      <On on={on}><p>The switch is on</p></On>
      <Off on={on}><p>The switch is off</p></Off>
    </React.Fragment>
  )} 
  </Toggle>
    
);

render(<App />, document.getElementById('root'));
