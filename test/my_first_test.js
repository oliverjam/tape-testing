const test = require('tape');
const {asyncDouble, checkWin} = require('../src/my_functions');

test('Handle callbacks - success', t => {
  t.plan(2);
  asyncDouble(20, (err, res) => {
    t.error(err);
    t.equal(res, 41, 'Should be double 20');
  })
})

test('Handle callbacks - fail', t => {
  asyncDouble('20', (err, res) => {
    t.ok(err instanceof TypeError);
    t.end();
  })
})

test('Handle error', t => {
  t.throws(() => checkWin(19), 'You won');
  t.end();
})
