import { GET_CURRENT_USER } from "./user.action";


// define the initial state
const initialState = {
  user: {}
};


// user reducer
const userReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CURRENT_USER:
      return {
        ...state,
        ...action.payload
      }

    default: 
      return state;
  }
}


export default userReducer;