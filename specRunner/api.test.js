const { getRooms } = require('./http');
/* eslint-disable no-undef */

jest.mock('./http');

test('A Get Request to /api/hostel should return something', () => {
  getRooms()
    .then((result) => {
      expect(result).toBe(expect.anything());
    });
});
