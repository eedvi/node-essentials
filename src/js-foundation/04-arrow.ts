interface user {
  id: number;
  name: string;
}

const users: user[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export const getUsersById = (id: number, callback: (err?: string, user?: user) => void) => {
  const user = users.find((user) => user.id === id);

  user ? callback(undefined, user) : callback(`USER not found with id ${id}`);
};
