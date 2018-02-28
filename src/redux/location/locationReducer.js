import {
  GET_LOCATION,
} from '../../constants/actions';

const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return action.location

    default:
      return state;
  }
}

export default locationReducer;
