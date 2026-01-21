const basePath = import.meta.env.VITE_BACKEND_URL;

const api = {
  get: (endpoint: string) => fetch(`${basePath}/${endpoint}`),
  post: (endpoint: string, body: Record<string, unknown>) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body && JSON.stringify(body),
    }),
  put: (endpoint: string, body: Record<string, unknown>) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: body && JSON.stringify(body),
    }),
  delete: (endpoint: string) =>
    fetch(`${basePath}/${endpoint}`, {
      method: "DELETE",
    }),
};

export { api };
