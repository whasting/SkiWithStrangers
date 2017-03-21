export const receiveAttendances = () => (
  $.ajax({
    method: 'GET',
    url: '/api/attendances'
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

export const updateAttendance = attendance => (
  $.ajax({
    method: 'PATCH',
    url: `/api/attendances/${attendance.id}`,
    data: {attendance}
  })
);

export const deleteAttendance = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/attendances/${id}`
  })
);
