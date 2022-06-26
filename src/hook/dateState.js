const start = new Date();
const end = new Date(Date.parse(new Date()) + 86400 * 6 * 1000);

export const initialDateState = {
  start,
  end,
  changeStart: start,
  changeEnd: end,
};

export const dateReducer = (state, action) => {
  if (action.type === "dateSelect") {
    if (action.date[0] && !action.date[1]) {
      return { ...state, start: action.date[0], end: null };
      //   return {
      //     start: action.date[0],
      //     end: null,
      //     changeStart: state.changeStart,
      //     changeEnd: state.changeEnd,
      //   };
    }
    if (action.date[0] && action.date[1]) {
      return {
        start: action.date[0],
        end: action.date[1],
        changeStart: action.date[0],
        changeEnd: action.date[1],
      };
    }
    return state;
  }
};
