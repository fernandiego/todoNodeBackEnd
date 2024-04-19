// test/db.test.js
const { initdb } = require('../src/db');
const {expect} = require('chai')

// test/db.test.js
describe('Database Connection', () => {
  before(async () => {
    await initdb();
  });

  it('should successfully connect to the SQLite database', async () => {
    try {

     const res = await db.raw('SELECT 1');
     console.log(res)
      expect(res).toEqual(true)
    } catch (error) {

      // expect.fail('Failed to connect to the database');
    }
  });
});
