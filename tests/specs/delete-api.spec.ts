import { expect } from 'chai';
import { printResponse } from 'tests/helper/fileutils';
import { methodDELETE } from 'tests/helper/method-call';
import { responseCode } from 'tests/resources/response/res-global';

describe('Validate DELETE Users', () => {
    it('should validate user delete /users/2', async () => {
        const response = await methodDELETE('users/2', {});
        printResponse(response);
        expect(response.statusCode).to.equal(responseCode.no_content);
    });
});
