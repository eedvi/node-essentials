

import { buildMakePerson } from "../../src/js-foundation/05-factory"


describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '1234';
    const getAge = () => 20;

    test('buildMakePerson should return a function', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');

    });


    test('builtMakePerson should return a person object', () => {

        const makePerson = buildMakePerson({ getUUID, getAge });
        const JohnDoe = makePerson({ name: 'John Doe', birthdate: '2003-12-21' });

        expect(JohnDoe).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '2003-12-21',
            age: 20
        });
    });
});