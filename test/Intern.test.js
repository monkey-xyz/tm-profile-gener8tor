const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("Init", () => {
        it("should return the school of the employee", () => {
            const employed = new Intern('Jane', 3, 'janedoe@emailprovider.com', 'Digital U');

            const testEm = employed.getSchool();

            expect(testEm).toEqual('Digital U');
        });

        it("should return the role of the employee", () => {
            const employed = new Intern('Jane', 3, 'janedoe@emailprovider.com', 'Digital U');

            const testEm = employed.getRole();

            expect(testEm).toEqual('Intern');
        });
    });
});