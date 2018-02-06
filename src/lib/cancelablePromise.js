export default function cancelablePromise(promise) {
  let canceled = false;

  let wrapped = new Promise((resolve, reject) => {
    promise.then((val) =>
      canceled ? reject({isCanceled: true}) : resolve(val)
    );
    promise.catch((error) =>
      canceled ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrapped,
    cancel: () => {
      canceled = true
    }
  }
}