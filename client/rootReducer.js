
const initState = {
  currentUser: {}
}

const rootReducer = (state = initState, action) => {

  switch (action.type) {
    case 'USER_CHANGE':
      return Object.assign ({}, state, {currentUser: action.user})
    default: 
        return state
  } 
}

export default rootReducer