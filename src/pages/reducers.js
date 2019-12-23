const defaultState = {
  url: "",
  data: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "loadData":
      return {
        url: action.url
      };
    case "change":
      return {
        data: action.data
      };

    default:
      return state;
  }
};
