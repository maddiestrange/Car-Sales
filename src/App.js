import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux';
import { removeFeature, addFeature } from './actions/actions';

const App = (props) => {
  console.log(props);
  const { state, addFeature, removeFeature } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addFeature={addFeature}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state
  };
};
 
export default connect(mapStateToProps, { addFeature, removeFeature })(App);

