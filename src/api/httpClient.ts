const BASE_URL = "http://localhost:5173/api";

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function request<T>(url: string): Promise<T> {
  await wait(300);
  const response = await fetch(BASE_URL + url);
  return await response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
