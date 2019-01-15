// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    var state = []; // this is our initial todoList
    var sortodo = document.querySelector('.fas');
    sortodo.addEventListener('click', function(e){
      var newState = todoFunctions.sortTodos(state,true);
      update(newState);
    });
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');
        
      // add span holding description
        let span = document.createElement('span');
        span.innerText = todo.description;
        todoNode.appendChild(span);
      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerText= 'Delete'
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
  
      // add markTodo button
      var markButtonNode = document.createElement('button');
      markButtonNode.innerText= 'Mark'
      markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      });
      todoNode.appendChild(markButtonNode);
      // add classes for css
      if(todo.done === true){
        span.classList.add('finish');
      }
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        let description = document.querySelector('input[name=description]').value;
        let newState = todoFunctions.addTodo(state,description);
        document.querySelector('input[name=description]').value = '';
        update(newState);
      });
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();