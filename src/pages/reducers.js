const defaultState = {
  url: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "loadData":
      return {
        url: action.url
      };
    default:
      return state;
  }
};
