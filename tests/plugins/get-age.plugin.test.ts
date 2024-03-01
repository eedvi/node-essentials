import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin.ts', () => {

    test('get-age() should return the age of a person', () => {

        const birthdate = '1962-10-19';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');

    });

    test('getAge should return current age', () => {

        const birthdate = '1962';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculateAge);


    })

    test('getAge should return 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1962);

        const birthdate = '1962-10-19';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith();

    })




});