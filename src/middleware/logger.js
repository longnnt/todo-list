export const loggerMiddleware = (storeApi) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state:", storeApi.getState());
  return result;
};
