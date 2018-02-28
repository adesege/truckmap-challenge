import {
  GET_USERS,
} from '../../constants/actions';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.user;
  }
  
  return state;
}
