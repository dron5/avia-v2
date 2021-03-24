import { createSelector } from 'reselect';
import stopsFilter from "../tools/actionFilter";

export const getSearchId = (state) => state.filteReduser.searchId;
export const getCheap = (state) => state.filteReduser.cheap;
export const getFast = (state) => state.filteReduser.fast;
export const getFetching = (state) => state.filteReduser.isFetching;

const getTicketsNone = (state) => {
  if (state.filteReduser.none) {
    const none = state.ticketsReduser.all.filter(
      (ticket) =>
        ticket.segments[0].stops.length === 0 &&
        ticket.segments[1].stops.length === 0
    );
    return none;
  }
  return [];
};
const getTicketsOne = (state) =>
  state.filteReduser.one && state.ticketsReduser.all.filter(stopsFilter(1));

const getTicketsTwo = (state) =>
  state.filteReduser.two && state.ticketsReduser.all.filter(stopsFilter(2));

const getTicketsThree = (state) =>
  state.filteReduser.three && state.ticketsReduser.all.filter(stopsFilter(3));

export const getStop = (state) => state.ticketsReduser.stop;

export const getTicketsAll = (state) =>
  state.filteReduser.all && state.ticketsReduser.all.length;

export const getSortedTickets = createSelector (
  getTicketsNone,
  getTicketsOne,
  getTicketsTwo,
  getTicketsThree,

  (none, one, two, three) => ([...(none || []), ...(one || []), ...(two || []), ...(three || []),])
);
