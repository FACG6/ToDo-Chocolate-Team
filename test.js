var test = require('tape');
var logic = require('./logic');
let to_dos_mark = [{
    id: 0,
    description: 'make tea',
    done: false
  },
  {
    id: 1,
    description: 'eat Lanch',
    done: true
  }, {
    id: 2,
    description: 'apple',
    done: false
  }
];

test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, 0);
  const expect = [{
      id: 0,
      description: 'make tea',
      done: true
    },
    {
      id: 1,
      description: 'eat Lanch',
      done: true
    }, {
      id: 2,
      description: 'apple',
      done: false
    }
  ];
  t.deepEqual(actual, expect, 'the done in index 0 must true');
  t.end();
});

test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, 1);
  const expect = [{
      id: 0,
      description: 'make tea',
      done: false
    },
    {
      id: 1,
      description: 'eat Lanch',
      done: false
    }, {
      id: 2,
      description: 'apple',
      done: false
    }
  ];
  t.deepEqual(actual, expect, 'the done in index 1 must false');
  t.end();
});
test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, -1);
  const expect = 'Please Enter Valid ID';
  t.deepEqual(actual, expect, 'when id negative must return Please Enter Valid ID');
  t.end();
});

test('Example test for mark', function(t) {
  const actual = logic.markTodo(to_dos_mark, 5);
  const expect = 'Please Enter Valid ID';
  t.deepEqual(actual, expect, 'when id not found must return Please Enter Valid ID');
  t.end();
});
