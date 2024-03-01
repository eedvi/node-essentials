// A funaction that makes another function


const { getAge, getUUID } = require("../plugins");
interface BuiltMakePerson {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;

}


export const builtMakePerson = ({ getUUID, getAge }: BuiltMakePerson) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const rafael = makeGuy(obj);

// console.log(rafael);
// module.exports = {
//   builtMakePerson: buildMakePerson,
// };

class Person {
  constructor(public name: string) { }

  talk() {
    //...
  }
}

function personFactory(name: string) {
  return new Person(name);
}



const me = personFactory('Rafael');
me.talk();

const bro = personFactory('Daniel');
bro.talk();

const sisters = {
  sis1: {
    name: personFactory('Maria')
  },
  sis2: {
    name: personFactory('Ana')
  },
  sis3: {
    name: personFactory('Brenda')
  }
}

const { sis1, sis2, sis3 } = sisters;

sis1.name.talk();
sis2.name.talk();
sis3.name.talk(); 