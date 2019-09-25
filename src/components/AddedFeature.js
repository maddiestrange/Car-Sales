import React from 'react';
import { removeFeature } from '../actions/actions'

const AddedFeature = props => {
  
  removeFeature = e => {
    e.preventDefault();
    this.props.removeFeature(props.feature.name);
  };
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={this.removeFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
