export const receiveEvents = (resort_id = -1) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {resort_id}
  })
);

export const receiveEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: {event}
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: {event}
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  })
);
