import { getUsersById } from "../../src/js-foundation/03-callbacks"

describe("js-foundation/03-callbacks.ts", () => {

    test('getUsersById should return an error if user does not exist', (done) => {

        const id = 10;

        getUsersById(id, (err, user) => {

            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();

            done();
        });
    });

    test('User found succesfully!', (done) => {
        const id = 1;

        getUsersById(id, (err, user) => {

            expect(err).toBeUndefined();
            expect(user).toStrictEqual({
                id: 1,
                name: "John Doe",
            });
            done()
        });

    })

});