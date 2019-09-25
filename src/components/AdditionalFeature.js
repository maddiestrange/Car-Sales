import React from 'react';
import { addFeature } from '../actions/actions'

const AdditionalFeature = props => {
  addFeature = e => {
    e.preventDefault();
    this.props.addFeature(props.feature.name);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={this.addFeature}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
