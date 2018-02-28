import {
  GET_USERS
} from '../../constants/actions';
import people from '../../data/people.json';

export function getUsers() {
  return (dispatch, getState) => {
    dispatch({
      type: GET_USERS,
      user: people
    })
  }
}
