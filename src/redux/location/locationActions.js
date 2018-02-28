import {
  GET_LOCATION
} from '../../constants/actions';


export const getLocation = ({ latitude, longitude }) => 
  (dispatch) =>
    fetch(`https://services.gisgraphy.com/reversegeocoding/search?format=json&lat=${latitude}&lng=${longitude}`)
      .then(response => response.json())
      .then((response) => {
        console.log('999999((((((((((((((', response.result[0],')))))))))))))))))')
        dispatch({
          type: GET_LOCATION,
          location: response.result[0],
        });
      });
