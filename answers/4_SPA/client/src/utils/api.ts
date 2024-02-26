const baseUrl = import.meta.env.VITE_API_BASE_URL as string;

type RequestOptions = RequestInit & {
  body?: BodyInit | object;
};
const api = async <T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> => {
  const { body, ...otherOptions } = options;

  const modifiedOptions = {
    ...otherOptions,
    headers: {
      // Todo server doesn't work with this header
      // "Content-Type": "application/json",
      Accept: "application/json",
      ...otherOptions.headers,
    },
    body: body !== undefined ? JSON.stringify(body) : null,
  };

  const response = await fetch(`${baseUrl}/${endpoint}`, modifiedOptions);

  if (!response.ok) {
    // Todo: Throw a custom error or handle the error in a different way
    throw new Error(response.statusText);
  }

  return response.json();
};

export default api;
