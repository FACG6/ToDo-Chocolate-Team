// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.conca
    if (newTodo === "" || newTodo === null) return todos;
    if (!isNaN(newTodo)) return todos;
    let newArray = todos.map(todo => ({ ...todo }));
    let obj = {};
    obj.id = todoFunctions.generateId();
    obj.description = newTodo;
    obj.done = false;
    newArray.push(obj);
    return newArray;
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    let newArray = todos.map(todo => ({ ...todo }));
    newArray = newArray.filter(element => element.id != idToDelete);
    return newArray;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    //clone the origin array
    if (idToMark < 0) {
      return 'Please Enter Valid ID';
    }
    let newToDos = todos.map(element => ({
      ...element
    }));
    let function_mark = (element)=>{
      if(element.id===idToMark) element.done = (!element.done);
      return element;
    }
    //to go inside the array
  /*for (let i in newToDos) {
      //to go inside the object in array
      if (newToDos[i].id === idToMark) {
        //if done true change to false and if false change to false
        if (newToDos[i].done === true) {
          newToDos[i].done = false;
        } else {
          newToDos[i].done = true;
        }
      }
    }
    return newToDos;*/
    return newToDos.map(function_mark);
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
    //clone the origin array
    let newToDos = todos.map(element => ({
      ...element
    }));
    //put the done in new array
    let newToDosDone = newToDos.filter(element => element.done);
    //put not done in new array
    let newToDosNotDone = newToDos.filter(element => !element.done);
    //function for sort alphaptic from a-z
    let function_sort = (a, b) => {
      if (a.description > b.description) {
        return 1;
      } else {
        return -1;
      }
    }
    //sort the not done array
    newToDosNotDone.sort(function_sort);
    //sort the done array
    newToDosDone.sort(function_sort);
    //merge the two array iin one array and return it
    return newToDosNotDone.concat(newToDosDone);
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
