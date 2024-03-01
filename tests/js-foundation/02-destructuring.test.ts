


import { characters } from "../../src/js-foundation/02-destructuring"

describe ( 'js-foundation/02-destructuring.ts', () => {

    test ( 'The list of characters should contain Griffith and Puck', () => {

    expect ( characters ).toContain ( 'Griffith'  );
    expect ( characters ).toContain ( 'Puck' );

  });

  test ( 'Casca should be before that Isidro', () => { 

    const [ ,,, casca, isidro ] = characters;

    expect ( casca ).toBe ( 'Casca' );
    expect ( isidro ).toBe ( 'Isidro' );

  

  });
 
})