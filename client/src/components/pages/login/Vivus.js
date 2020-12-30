import React from 'react';
import ReactVivus from 'react-vivus';

import icon from './footprint_animated.svg'


const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file: icon,
      type: 'delayed',
      animTimingFunction: 'EASE',
      duration: 260,
    }}
    style={{ height: '600px', width: '100%' }}
    callback={console.log}
  />
);
export default MyComponent;