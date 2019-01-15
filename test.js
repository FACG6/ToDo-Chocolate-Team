var test = require('tape');
var logic = require('./logic');

// addTodo Function test
let array = [];
test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,'ayman');
  let expected= [{id:1 , description:'ayman', done:false}]
  t.deepEqual(actual,expected,'new todo is added to todos array');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,'');
  let expected= -1;
  t.deepEqual(actual,expected,'add empty description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,null);
  let expected= -1;
  t.deepEqual(actual,expected,'add null description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,2);
  let expected= -1;
  t.deepEqual(actual,expected,'add number description');
  t.end();
});

test('Test addTodo function', function(t) {
  let actual=logic.addTodo(array,' ');
  let expected= -1;
  t.deepEqual(actual,expected,'add space description');
  t.end();
});
