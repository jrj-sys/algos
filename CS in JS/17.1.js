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