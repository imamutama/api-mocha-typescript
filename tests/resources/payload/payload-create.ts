import { Create } from "tests/types/custom";

export const payloadCreate = (value: Create) => {
  return {
    name: value.name,
    job: value.job,
  };
};
