export function profileAction(id, value) {
  return (dispatch) => {
    dispatch({ type: 'PROFILE' });
  };
}

export function clearProfileAction() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_PROFILE_FULFILLED', payload: null });
  };
}

export function fetchProfileAction() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_PROFILE' });
  };
}
