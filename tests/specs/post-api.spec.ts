import { assert, expect } from 'chai';
import constant from 'tests/helper/constant';
import { printResponse } from 'tests/helper/fileutils';
import { methodPOST } from 'tests/helper/method-call';
import { payloadCreateUpdate } from 'tests/resources/payload/payload-create';
import {
    payloadLogin,
    payloadLoginFailed,
} from 'tests/resources/payload/payload-login';
import { responseCode } from 'tests/resources/response/res-global';

describe('Validate POST Users', () => {
    it('should validate /login successfully', async () => {
        const value = {
            email: constant.email,
            password: constant.password,
        };
        const response = await methodPOST('login', payloadLogin(value), {});
        printResponse(response);
        expect(response.statusCode).equal(responseCode.success);
        assert.isNotNull(response.body.token);
    });
    it('should validate /login failed unsuccessfull', async () => {
        const response = await methodPOST(
            'login',
            payloadLoginFailed(constant.email),
            {},
        );
        printResponse(response);
        expect(response.statusCode).equal(responseCode.bad_request);
        expect(response.body.error).equal('Missing password');
    });
    it('should validate /users create successfull', async () => {
        const value = {
            name: constant.name,
            job: constant.job,
        };
        const response = await methodPOST(
            'users',
            payloadCreateUpdate(value),
            {},
        );
        printResponse(response);
        expect(response.statusCode).equal(responseCode.created);
        expect(response.body.name).equal(constant.name);
        expect(response.body.job).equal(constant.job);
    });
});
