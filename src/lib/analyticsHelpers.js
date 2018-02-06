import { streetAddress } from './locationHelpers'

export function analyticsItemID(item) {
  let {object_type, name, id} = item;

  if(object_type == 'address') {
    item.address = name;
    name = streetAddress(item);
  } else if(object_type == 'city') {
    name = name + ', ' + item.state;
  } else if(id) {
    name = id;
  }

  return name;
}