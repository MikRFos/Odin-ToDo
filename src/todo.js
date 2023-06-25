function ToDo(title, items, desc) {
  const itemStatus = {};
  for (let item of items) {
    itemStatus[item] = false;
   }
  return { title, itemStatus, desc };
}

export default ToDo;
