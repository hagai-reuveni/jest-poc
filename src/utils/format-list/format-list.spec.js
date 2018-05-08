import formatList from './format-list';

test('can format a list', () => {
  const formattedList = formatList(
    'Star Wars Names',
    [
      {name: 'Qui-Gon Jinn'},
      {name: 'Chewbacca'},
      {name: 'Han Solo'},
      {name: 'Luke Skywalker'},
    ],
    'name'
  )
  expect(formattedList).toMatchSnapshot()
})

//** example from https://github.com/kentcdodds/jest-tutorial/blob/egghead/05-snapshot/src/format-list.js*/