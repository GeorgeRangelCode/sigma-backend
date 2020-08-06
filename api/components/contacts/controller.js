const TABLE = "contacts";

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  const list = () => {
    return store.list(TABLE);
  };

  const get = (id) => {
    return store.get(TABLE, id);
  };

  const insert = (body) => {
    const contact = {
      name: body.name,
      email: body.email,
      state: body.state,
      city: body.city,
    };

    return store.insert(TABLE, contact);
  };

  return {
    list,
    get,
    insert,
  };
};
