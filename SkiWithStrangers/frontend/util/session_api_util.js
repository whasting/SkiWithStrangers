export const signup = (username, password) => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {user: {username: username, password: password}}
  })
);

export const login = (username, password) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: {username: username, password: password}}
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
