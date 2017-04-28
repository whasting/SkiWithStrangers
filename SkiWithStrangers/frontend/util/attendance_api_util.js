export const receiveAttendances = (userId = -1) => (
  $.ajax({
    method: 'GET',
    url: '/api/attendances',
    data: {user_id: userId}
  })
);

export const receiveAttendance = id => (
  $.ajax({
    method: 'GET',
    url: `/api/attendances/${id}`
  })
);

export const createAttendance = attendance => (
  $.ajax({
    method: 'POST',
    url: '/api/attendances',
    data: {attendance}
  })
);

export const receiveGuest = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);

export const updateAttendance = attendance => (
  $.ajax({
    method: 'PATCH',
    url: `/api/attendances/${attendance.id}`,
    data: {attendance}
  })
);

export const deleteAttendance = (userId, eventId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/attendances/`,
    data: {
      user_id: userId,
      event_id: eventId
    }
  })
);
