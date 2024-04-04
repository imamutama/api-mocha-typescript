import { faker } from "@faker-js/faker";
import fs from "fs";
import data from "./data";

export const exportJSONResponse = (filename: string, data: any) => {
  if (!fs.existsSync("temp")) {
    fs.mkdirSync("temp");
  }
  fs.writeFileSync(`temp/${filename}`, JSON.stringify(data, null, 4));
};

export async function printResponse(response) {
  console.log("response : " + JSON.stringify(response.body, null, 2));
}

export const getEnv = (envName: string) => {
  let value = <string>process.env[envName];
  if (value === undefined || value === "") {
    throw new Error(`'${envName}' not defined / have no value in .env file!`);
  }
  return value;
};
