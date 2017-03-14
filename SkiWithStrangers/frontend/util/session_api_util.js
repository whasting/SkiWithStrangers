export const signup = (username, password) => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {user: {username: username, password: password}}
  })
);
