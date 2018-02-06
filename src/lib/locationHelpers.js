import { formatNumber, pluralNumber } from './format';

export function streetAddress(location, singleLine = true) {
  const l = location;
  return `${l.address || ''}${!l.address ? '' : (singleLine ? ', ' : "\n")}${l.city}, ${l.state} ${l.zipcode || ''}`.trim();
}

export function prettyDistance(meters) {
  if(meters <= 100) {
    return '< 100 meters';
  }
  if(!meters) {
    return null;
  }
  const miles = meters / 1609.34;
  if(meters <= 1000) {
    return formatNumber(Math.ceil(meters * 100) / 100) + ' meters';
  }
  if(miles < 10) {
    return formatNumber(Math.ceil(miles * 10) / 10) + ' miles';
  }
  return formatNumber(Math.ceil(miles)) + ' miles';
}

export function prettyTime(duration) {
  if(!duration) return null;

  if(duration <= 60) {
    return '1 min';
  }

  const fullMins = Math.ceil((duration - 30) / 60);
  const mins = fullMins % 60;
  const hours = Math.floor(fullMins / 60);

  const minText = pluralNumber(mins, 'min');
  const hourText = pluralNumber(hours, 'hr');

  if(hours == 0) {
    return minText;
  }

  return hourText + ' ' + minText;
}

export function routeDistanceTimeSummary(data) {
  const distance = prettyDistance(data.distance);
  const time = prettyTime(data.duration_traffic || data.duration);
  if(distance && time) {
    return distance + ' • ' + time;
  }
  if(distance) {
    return distance;
  }
  if(time) {
    return time;
  }
}

export function simpleAddress(location) {
  const highway = (location.highway || '').replace('Hwy ', ''),
    label = highwayLabel(location, false);

  if(location.highway && label) {
    return `${location.city}, ${location.state}. ${label}`;
  } else {
    return streetAddress(location);
  }
}

export function highwayLabel(location, includeBoth = true) {
  const {highway, highway_exit, highway_marker} = location;

  if(highway && (highway_exit || highway_marker)) {
    if(includeBoth && highway_exit && highway_marker) {
      return `${highway} at Exit ${highway_exit} (Mile ${highway_marker})`;
    } else if(highway_exit) {
      return `${highway} at Exit ${highway_exit}`;
    } else {
      return `${highway} at Mile ${highway_marker}`;
    }
  } else if(highway) {
    return `${highway}`
  }
  return null;
}

export function highwayAccessLabel(location) {
  const cat = location.category_id,
    bound = location.accessible_bound;

  const directions = {
    N: 'North',
    E: 'East',
    S: 'South',
    W: 'West'
  }

  // Truck Services, Grocery Stores, Hotel, Warehouse
  if(cat == 5 || cat == 6 || cat == 7 || cat == 8) {
    return null;
  }

  if(bound && bound.length == 1) {
    return `${directions[bound[0].toUpperCase()]} Bound`;
  }
  
  return `Both Directions`;
}