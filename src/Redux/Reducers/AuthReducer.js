const key = localStorage.key(1); 
let user = JSON.parse(localStorage.getItem(key));

const init = user ? { loggedIn: true, user } : {loggedIn: false}; ; 

/*
const init = {
    isLogin: false
  };
  */
  export const AuthReducer = (state = {init}, action) => {
    switch (action.type) {
      case "LOGIN":
        return { 
          ...state,
           user: action.payload,
           loggedIn: true
        };


      default:
        return state;
    }
   };