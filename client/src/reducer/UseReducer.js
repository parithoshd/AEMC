const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(sessionStorage.getItem("state")) || initialValue;

export const reducer = (state, action) => {
  if (action.type === "USER") {
    return action.payload
  }
  return state
}
