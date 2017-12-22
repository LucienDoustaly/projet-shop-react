import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const CircularProgressSimple = (props) => (
  <div>
    <CircularProgress size={props.size} thickness={props.thickness} />
  </div>
);

export default CircularProgressSimple;