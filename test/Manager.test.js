const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("Init", () => {
        it("should return the role of the employee", () => {
            const employed = new Manager('Jane', 3, 'janedoe@emailprovider.com', 11);

            const testEm = employed.getRole();

            expect(testEm).toEqual('Manager');
        });
    });
});