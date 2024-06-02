import { expect } from 'chai';
import constant from 'tests/helper/constant';
import { printResponse } from 'tests/helper/fileutils';
import { methodGETParam, methodPUT } from 'tests/helper/method-call';
import { payloadCreateUpdate } from 'tests/resources/payload/payload-create';
import { queryParam } from 'tests/resources/query/getParam';
import { responseCode } from 'tests/resources/response/res-global';

describe('Validate PUT Users', () => {
    it('should validate /users create successfull', async () => {
        const value = {
            name: constant.name,
            job: constant.job,
        };
        const response = await methodPUT(
            'users/2',
            payloadCreateUpdate(value),
            {},
        );
        printResponse(response);
        expect(response.statusCode).equal(responseCode.success);
        expect(response.body.name).equal(constant.name);
        expect(response.body.job).equal(constant.job);
    });

    it('should validate user single /users/2', async () => {
        const value = {
            page: '2',
        };
        const response = await methodGETParam('users/2', queryParam(value));
        printResponse(response);
        expect(response.statusCode).to.equal(responseCode.success);
        expect(response.body.data.id).to.equal(2);
    });
});
