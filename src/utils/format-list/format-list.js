export default (listName, items, key) => {
  return `These are the items in the ${listName}:${
    items.reduce((itemsList, item) => {
      return `${itemsList}\n  - ${key ? item[key] : item}`
    }, '')
  }`
}
//** Originl code from https://github.com/kentcdodds/jest-tutorial/blob/egghead/05-snapshot/src/format-list.js*/