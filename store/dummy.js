const db = {
  contacts: [
    {
      id: "1",
      name: "Jorge",
      email: "jorge@mail.com",
      state: "Cundinamarca",
      city: "Chia",
    },
    {
      id: "2",
      name: "Pepe",
      email: "pepe@mail.com",
      state: "Cundinamarca",
      city: "Chia",
    },
  ],
};

const list = async (table) => {
  return db[table];
};

const get = async (table, id) => {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
};

const insert = async (table, data) => {
  db[table].push(data);
};

module.exports = {
  list,
  get,
  insert,
};
