// 1. `main()` => global function that creates the global memory 
// 2. a new variable, `num`, is assigned the value 3 in global memory
// 3. function identifier `addTwo` is added to the global memory along with its definition
// 4. the TOE now points to the last line where a variable is declared and global memory is allocated 
// 5. `addTwo(num)` is invoked and assigns the return value to `output`
// 6. the function execution is added to the call stack => TOE evaluates the function and executes 
// 7. a lookup is performed in global execution context for `num`
// 8. `int` in `addTwo` is assigned the value 3 from `num` 
// 9. the TOE reaches the last line to return `sum` (`addTwo` is popped off of the stack)
// 10. `output` is updated in the global memory to have a value of 5 


const num = 3;
function addTwo(int) {
  const sum = int + 2;
  return sum;
}

const output = addTwo(num);


// console.log('Good morning' => 'Hello world' => 'I like bananas' => 'Are you listening?')
// 1. `main()` is added to the stack
// 2. `answer()` is evaluated by the TOE and allocates it in global memory
// 3. the TOE proceeds to the "last" console.log of 'Good Morning', which is pushed onto the stack and executed 
// 4. the TOE evaluates the function call of `answer()` and pushes it onto the stack 
// 5. console.log('Hello world'); is pushed onto the stack which logs it 
// 6. the TOE proceeds to the next line of `answer` and evaluates the 'I like bananas' console log
// 7. `response()` then causes a lookup to the execution context of answer and pushed to the stack 
// 8. the TOE enters the function definition of `response()` which puts the console.log on the stack 
// 9. `return;` pops the `response()` function off the call stack and returns to `answer()`
// 10. the TOE reaches the end of `answer()` which results in `main()` popping off of the stack


function answer() {
  console.log("Hello world");
  function response() {
    console.log("Are you listening?");
    return;
  }

  console.log("I like bananas");
  response();
}

console.log("Good Morning");
answer();

// 1. `main()` is pushed onto the call stack 
// 2. `sayHello` is saved in global memory
// 3. the TOE skips to the line that invokes `sayHello()`and pushes it onto the stack (=> executes and creates content)
// 4. the TOE evaluates the `setTimeout()` function and "activates" it (it's not on the stack)
// 5. after the timer counts down one second the callback function, the console.log, is pushed onto the callback queue
// 6. the TOE has already progressed to the next thread, the declaration of `sayGoodbye()` to memory in the execution context 
// 7. the console.log is pushed onto the call stack and then pops it off
// 8. `sayGoodbye()` is invoked and pushed onto the call stack
// 9. the TOE moves to the `sayGoodbye` function and the console.log is executed
// 10. `sayGoodbye()` is popped off of the call stack and the TOE is returned to the `sayHello()` function
// 11. `sayHello()` also ends because there is no more lines of code
// 12. `setTimeout()` resolves and the callback is added to the queue 
// 13. the cb function encounters the event loop which adds it to the stack where it is executed 
// 14. the TOE executes the last console.log('Hello world')
// 15. the cb function is popped off of the call stack 

function sayHello() {
  setTimeout( () => console.log("Hello world"), 1000);
  function sayGoodbye() {
    console.log("See ya");
  }

  console.log("Good Morning");
  sayGoodbye();
}

sayHello();

// 'foo' => 'baz' => 'bar'
// 1. `main()` is pushed onto the call stack
// 2. foo is allocated to global memory
// 3. the TOE invokes `foo()` in the last line of code and pushes it on the call stack 
// 4. `setTimeout` is activated (with a timer of 0) so the function is immediately resolved and pushed onto the QUEUE
// 5. the event loop first checks the call stack to make sure there are no more tasks to run
// 6. the event loop will see the two console.logs 'foo' and 'baz', they are pushed onto the call stack and popped off
// 7. after the stack is idle, the event loop allows the callback function to push from the queue to the stack, then 
// logs the third string 'bar' 

function foo() {
  setTimeout( () => {
    console.log("bar");
  }, 0);

  console.log("foo");
  console.log("baz");
}

foo();