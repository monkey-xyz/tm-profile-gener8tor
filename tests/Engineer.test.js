const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Init", () => {
        it("should return the github username of the employee", () => {
            const employed = new Emgineer('Jane', 3, 'janedoe@emailprovider.com', 'janesgithub');

            const testEm = employed.getGithub();

            expect(testEm).toEqual('janesgithub');
        });
        it("should return the role of the employee", () => {
            const employed = new Emgineer('Jane', 3, 'janedoe@emailprovider.com', 'janesgithub');

            const testEm = employed.getRole();

            expect(testEm).toEqual('Engineer');
        });
    });
});