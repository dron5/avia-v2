import { fetchTickets, fetchSearchId } from "../asyncActions/fetchStuff";

export const onClick = (name) => ({ type: name.target.name });

export const addSearchId = () => async (dispatch) => {
  const response = await fetchSearchId();
  dispatch({ type: "ADD_SEARCH_ID", payload: response });
};

export const addTickets = (id) => async (dispatch) => {
  dispatch({ type: "FETCHING", payload: true });
  const response = await fetchTickets(id);
  const { tickets, stop } = response;
  dispatch({ type: "ADD_TICKETS", payload: { tickets, stop } });
  dispatch({ type: "FETCHING", payload: false });
};
