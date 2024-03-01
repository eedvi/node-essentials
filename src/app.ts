// const { getAge, getUUID } = require("./plugins");

// import { buildLogger } from "./plugins/logger.plugin";
import { getPokemonById } from "./js-foundation/06-promises";

// const {emailTemplate} = require("./js-foundation/01-template.ts"); 
// require("./js-foundation/02-destructuring.ts");
// const { getUsersById } = require("./js-foundation/03-callbacks");
// const { getUsersById } = require("./js-foundation/04-arrow");
// const { builtMakePerson: builtMakePerson } = require("./js-foundation/05-factory.ts");
// const logger = buildLogger('app.js');


// getUsersById(7, (error: string, users: string) => {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     console.log(users);
// });


// console.log(emailTemplate);
// logger.log('Hello world');
// logger.error('Hi')

getPokemonById(788)
    .then((pokemon) => console.log({ pokemon }))
    .catch((error) => console.error(error))
    .finally(() => console.log("Finally"));

// / !References of factory functions
// const makePerson = builtMakePerson({ getUUID, getAge });

// const obj = { name: "Rafael", birthdate: "2003-12-21" };

// const newPerson = { name: "Maria", birthdate: "2014-02-12" };
// const maria = makePerson(newPerson);
// const rafael = makePerson(obj);
// console.log({ rafael });

// console.log({ maria });