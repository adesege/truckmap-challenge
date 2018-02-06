'use strict';

export function parseDispatchActionArguments(args) {
  if(!args || !isString(args)) return [];

  let result = null;

  try {
    result = JSON.parse(args);
  } finally {
    return isArray(result) ? result : [args];
  }
}