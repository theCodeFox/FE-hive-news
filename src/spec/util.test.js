const formatDateTime = require('../utils/utils.js');

test('returns string', () => {
  const dateTime = '2019-03-22T10:51:22.977Z';
  expect(formatDateTime(dateTime)).toMatch(/.+/);
});
test('returns string including date', () => {
  const dateTime = '2019-03-22T10:51:22.977Z';
  expect(formatDateTime(dateTime)).toMatch(/22-03-2019/);
});
test('returns string including time', () => {
  const dateTime = '2019-03-22T10:51:22.977Z';
  expect(formatDateTime(dateTime)).toMatch(/10:51/);
});
test('returns string with date and time', () => {
  const dateTime = '2019-03-22T10:51:22.977Z';
  expect(formatDateTime(dateTime)).toMatch(/^created at 10:51 on 22-03-2019$/);
});