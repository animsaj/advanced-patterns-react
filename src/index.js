import React from 'react';
import { render } from 'react-dom';
import Toggle from './Toggle';



const App = () => (
    <Toggle>
      <Toggle.Button />
      <Toggle.On><p>The switch is on</p></Toggle.On>
      <Toggle.Off><p>The switch is off</p></Toggle.Off>
    </Toggle>
);

render(<App />, document.getElementById('root'));
