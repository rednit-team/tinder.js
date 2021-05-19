import * as centra from "@aero/centra";

const baseUrl = "https://api.gotinder.com";

const headers = {
  "User-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36",
  Accept: "application/json",
  "X-Auth-Token": "",
};

function setToken(authToken: AuthToken) {
  headers["X-Auth-Token"] = authToken;
}

const req = async (
  route: string,
  method?: string,
  body?: any
): Promise<any> => {
  route = baseUrl + route;
  const fetch = centra(route, method);
  fetch.reqHeaders = headers;
  const res = await fetch.body(body).send();
  if (res.statusCode >= 200 && res.statusCode < 300) {
    try {
      return res.json;
    } catch {
      return { status: res.statusCode };
    }
  } else if (res.statusCode >= 400 && res.statusCode < 500) {
    throw res.text;
  } else {
    console.log(`reattempting, status code: ${res.statusCode}`);
    return await req(route, method, body);
  }
};

export async function get(route: string) {
  await req(route);
}

export async function post(route: string, body: any) {
  await req(route, "POST", body);
}

export async function put(route: string, body: any) {
  await req(route, "PUT", body);
}

export async function del(route: string) {
  await req(route, "DELETE");
}

export default {
  setToken,
  get: async (route: string) => await req(route),
  post: async (route: string, body?: any) => await req(route, "POST", body),
  put: async (route: string, body: any) => await req(route, "PUT", body),
  delete: async (route: string) => await req(route, "DELETE"),
};
