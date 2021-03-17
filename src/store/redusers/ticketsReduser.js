const initState = {
  all: [],
  stop: false,
};

const ticketsReduser = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TICKETS":
      return {
        ...state,
        all: [...state.all, ...action.payload.tickets],
        stop: action.payload.stop,
      };
    default:
      return state;
  }
};

export default ticketsReduser;
