interface User {
  id: number;
  name: string;
}

export const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "Maria Smith",
  }, {
    id: 7,
    name: "Scar Bohn",

  }
];

export function getUsersById(id: number, callback: (err?: string, user?: User) => void) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {

    return callback(`User not found with id ${id}`);

  }
  return callback(undefined, user);
}


