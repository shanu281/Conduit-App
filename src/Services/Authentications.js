const baseUrl = process.env.REACT_APP_BASE_URL;

export const login = (body) => {
  return fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => data);
  // .then((data) => console.log(data));
};

export const signUp = (body) => {
  fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getUserDetails = (token) => {
  console.log(token);
  fetch(`${baseUrl}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    }
  })
    .then((res) => res.json())
    .then((data) => console.log("token", data))
    .catch((e) => console.log({ e }));
};
