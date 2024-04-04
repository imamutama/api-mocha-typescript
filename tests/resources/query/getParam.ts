import { GetParam } from "tests/types/custom";

export const queryParam = (param: GetParam) => {
  return {
    page: param.page,
  };
};
