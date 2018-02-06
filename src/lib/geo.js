import { each } from 'lodash';

export function buildLatLon(obj) {
  if(obj && obj.hasOwnProperty) {
    if(obj.hasOwnProperty('lon') && obj.hasOwnProperty('lat')) {
      return {
        latitude: obj.lat,
        longitude: obj.lon
      }
    }
    if(obj.hasOwnProperty('longitude') && obj.hasOwnProperty('latitude')) {
      return {
        latitude: obj.latitude,
        longitude: obj.longitude
      }
    }
    if(obj.hasOwnProperty('lonlat')) {
      const pair = obj.lonlat.coordinates;
      return {
        latitude: pair[1],
        longitude: pair[0]
      }
    }
  }

  return null;
}

export function buildLatLonPair(obj) {
  const latlon = buildLatLon(obj);
  return `${latlon.latitude},${latlon.longitude}`;
}

export function locationInRegion(location, region) {
  const {latitude: lat, longitude: lon} = buildLatLon(location);

  const { latitude, longitude, latitudeDelta, longitudeDelta} = region;

  if(lat <= latitude - latitudeDelta || lat >= latitude + latitudeDelta) return false;
  if(lon <= longitude - longitudeDelta || lon >= longitude + longitudeDelta) return false;

  return true;
}