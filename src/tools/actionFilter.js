const stopsFilter = (stops) => (ticket) =>
  (ticket.segments[0].stops.length === stops &&
    ticket.segments[1].stops.length < stops) ||
  (ticket.segments[1].stops.length === stops &&
    ticket.segments[0].stops.length < stops);

export default stopsFilter;