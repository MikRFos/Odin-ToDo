function ToDo(title, items, desc, due) {
  const itemStatus = {};
  for (let item of items) {
    itemStatus[item] = false;
   }
  return { title, itemStatus, desc, due };
}

export default ToDo;
