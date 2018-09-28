const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  0: {
    firstName: "",
    lastName: "",
    company: "",
    department: "",
    email: "",
    position: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE': case 'FETCH_PROFILE': {
      return {
        ...state,
        fetching: true
      };
    }
    case 'PROFILE_REJECTED': case 'FETCH_PROFILE_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'PROFILE_FULFILLED': case 'FETCH_PROFILE_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        ...action.payload
      };
    }
    case 'CLEAR_PROFILE_FULFILLED': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;