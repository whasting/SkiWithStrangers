export const receiveResorts = () => (
  $.ajax({
    method: 'GET',
    url: '/api/resorts'
  })
);

export const receiveResort = id => (
  $.ajax({
    method: 'GET',
    url: `/api/resorts/${id}`
  })
);

export const createResort = resort => (
  $.ajax({
    method: 'POST',
    url: 'api/resorts',
    data: {resort}
  })
);

export const updateResort = resort => (
  $.ajax({
    method: 'PATCH',
    url: `/api/resorts/${resort.id}`,
    data: {resort}
  })
);

export const deleteResort = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/resorts/${id}`
  })
);
