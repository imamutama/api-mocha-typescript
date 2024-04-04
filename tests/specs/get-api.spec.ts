import { expect } from "chai";
import { printResponse } from "tests/helper/fileutils";
import { methodGETParam } from "tests/helper/method-call";
import { queryParam } from "tests/resources/query/getParam";
import { responseCode } from "tests/resources/response/res-global";

describe("Validate GET Users", () => {
  it("should validate user list /users with query param page", async () => {
    const value = {
      page: "2",
    };
    const response = await methodGETParam("users", queryParam(value));
    printResponse(response)
    expect(response.statusCode).to.equal(responseCode.success)
    expect(response.body.page).to.equal(2);
    expect(response.body.total_pages).to.equal(2);
  });
  it("should validate user single /users/2", async () => {
    const value = {
      page: "2",
    };
    const response = await methodGETParam("users/2", queryParam(value));
    printResponse(response)
    expect(response.statusCode).to.equal(responseCode.success)
    expect(response.body.data.id).to.equal(2);
  });
  it("should validate user single not found /users/23", async () => {
    const value = {
      page: "2",
    };
    const response = await methodGETParam("users/23", queryParam(value));
    printResponse(response)
    expect(response.statusCode).to.equal(responseCode.notFound)
  });
});
