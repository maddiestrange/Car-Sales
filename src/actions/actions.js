export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const ADD_FEATURE = 'ADD_FEATURE';

export function removeFeature(removeFeature) {
  return {
    type: REMOVE_FEATURE,
    payload: removeFeature
  }
}

export function addFeature(addFeature) {
    return {
      type: ADD_FEATURE,
      payload: addFeature
    }
  }