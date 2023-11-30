const options = (data) => {
  const options = {
    credentials: 'include',
  };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-type': 'application/json',
      // Accept: 'application/json',
    };
    // options.credentials = 'include';
  }
  // else {
  //   options.headers = {
  //     'Content-type': 'application/json',
  //     Accept: 'application/json',
  //   };
  //   options.credentials = 'include';
  // }

  return options;
};

const request = async (method, url, data) => {
  const response = await fetch(url, {
    method,
    ...options(data),
  });
  // console.log(response);

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
