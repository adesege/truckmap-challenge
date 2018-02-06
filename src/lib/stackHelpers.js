import { map } from 'lodash';

export function stackNotClosed(stackItems) {
  return stackItems.filter((item) => {
    return item.status !== 'closed';
  })
}

export function stackNotClosedLast(stackItems) {
  const newStack = stackNotClosed(stackItems);
  if(newStack.length == 0) return null;
  return newStack[newStack.length - 1];
}

export function stackNotClosedLastItem(stackItems) {
  const last = stackNotClosedLast(stackItems);
  if(!last || !last.item) return null;
  return last.item;
}

export function stackGetFrontPosition(stackItems) {
  const front = stackNotClosedLast(stackItems);
  if(!front) return 0;
  return front.coords[front.status];
}

const LOCATION_GROUP_TYPES = 'category feature chain gas_brand'.split(' ')
const LOCATION_SINGLE_TYPES = 'location address city'.split(' ')

export function stackShouldCloseItem(type, incomingType) {
  if(type === 'launcher') {
    return false;
  }

  if(LOCATION_GROUP_TYPES.indexOf(type) >= 0) {
    return LOCATION_GROUP_TYPES.indexOf(incomingType) >= 0;
  }

  if(LOCATION_SINGLE_TYPES.indexOf(type) >= 0) {
    return LOCATION_SINGLE_TYPES.indexOf(incomingType) >= 0;
  }

  // Basically remove everyhing (except launcher) if we're making a route
  // Possibly TODO change this
  if(incomingType === 'route') {
    return true;
  }

  return false;
}

export function stackPruneNewItem(stackItems, incomingType) {
  return map(stackItems, (item) => {
    let { type, status, defaultStatus } = item;

    if(stackShouldCloseItem(type, incomingType)) {
      status = 'closed';
    } else if(status === 'top') {
      status = defaultStatus;
    }

    return {
      ...item,
      status
    }
  })
}
