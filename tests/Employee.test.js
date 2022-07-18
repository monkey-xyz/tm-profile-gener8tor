const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Init", () => {
        it("should return the name of the employee", () => {
            const employed = new Employee('Jane', 3, 'janedoe@emailprovider.com');

            const testEm = employed.getName();

            expect(testEm).toEqual('Jane');
        });

        it("should return the id of the employee", () => {
            const employed = new Employee('Jane', 3, 'janedoe@emailprovider.com');

            const testEm = employed.getId();

            expect(testEm).toEqual(3);
        });

        it("should return the email of the employee", () => {
            const employed = new Employee('Jane', 3, 'janedoe@emailprovider.com');

            const testEm = employed.getEmail();

            expect(testEm).toEqual('janedoe@emailprovider.com');
        });

        it("should return the role of the employee", () => {
            const employed = new Employee('Jane', 3, 'janedoe@emailprovider.com');

            const testEm = employed.getRole();

            expect(testEm).toEqual('Employee')
        });
    });
});