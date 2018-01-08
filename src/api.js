/**
 Api Mock
**/
import config from './config';

export function login(email, password) {
  return fetch(config.loginUrl, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then((response) => {
    return response.json();
  });
}

export function register(username, email, password) {
  return fetch(config.registerUrl, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  }).then((response) => {
    return response.json();
  });
}
