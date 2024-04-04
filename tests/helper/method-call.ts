import supertest from "supertest";
import { URL } from "tests/config/supertest";

export const methodGETALL = async (endpoint: string, headers: object) => {
  return await supertest(URL).get(endpoint).set(headers);
};

export const methodGETParam = async (
  endpoint: string,
  query: object,
) => {
  return await supertest(URL).get(endpoint).query(query);
};

export const methodPOST = async (
  endpoint: string,
  payload: object,
  headers: object
) => {
  const response = await supertest(URL)
    .post(endpoint)
    .set(headers)
    .send(payload);
  return response;
};

export const methodPOSTFile = async (
  endpoint: string,
  headers: object,
  key: string,
  path: string
) => {
  const response = await supertest(URL)
    .post(endpoint)
    .set(headers)
    .attach(key, path);
  return response;
};

export const methodPUT = async (
  endpoint: string,
  payload: object,
  headers: object
) => {
  const response = await supertest(URL)
    .put(endpoint)
    .set(headers)
    .send(payload);
  return response;
};

export const methodDELETE = async (endpoint: string, headers: object) => {
  const response = await supertest(URL).delete(endpoint).set(headers);
  return response;
};
