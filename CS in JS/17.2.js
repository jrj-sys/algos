// we can transfer surrounding memory references through closures
// a closure is a function that contains references to its surrounding state
// creates privacy 
// this is a self-containing counter

function counter() {
  let count = 0;
  return function() {
    return count++;
  }
}

const increment = counter();
increment(); // => 0

class Tiger {
  constructor() {
    this.noise = 'roar';
  }
  sound() {
    console.log(this.noise)
  }
}

const simba = new Tiger();
simba.sound(); // => "roar"

// created a factory function `tiger`
// contains a variable, `noise`, and returns an object literal that has the method `sound`
// creates a closure, allowing access to the outer scope containing `noise`

const tiger = function() {
  const noise = 'roar';
  return {
    sound: function() {
      console.log(noise);
    },
  }
}

const tigger = tiger();
tigger.sound(); // => "roar"

// inheritance vs composition 

Device
  .takeVideo()
  .takePicture()

    Phone
      .call()

    Tablet
      .browseInternet()

Appliance
  .makeNoise()

    Laundry
      .washClothes()

    Refrigerator
      .chill()


Appliance
  .makeNoise()
    
  Laundry
    .washClothes()
    
    Refrigerator
    .chill()
    
        Chillinator
        .call()
        .browserInternet()

// => factory functions

const chiller = (state) => ({
  chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`) 
})

const caller = (state) => ({
  call: () => console.log(`I am calling ${state.number}`)
})

const browserInternet = (state) => ({
  browse: () => state.url
})

caller({number: '411'}).call() //=> I am calling 411

const chillinator = (temp) => {
  let state = {
    temp,
    number: 311,
    url: 'google.com'
  }
  return { ...chiller(state), ...caller(state), ...browserInternet(state) }
}


// the problem with "this"

const robot = {
  name: "rumba",
  clean() {
    alert(`${this.name} is now cleaning`);
  }
};

setTimeout(robot.clean, 0); // =>  is now cleaning

// first function, clickHandler1(), does not work as expected, 
// because the arrow shorthand syntax binds this to the parent scope instead of referencing the <button> element

const clickHandler1 = () => {
  this.textContent = 'Clicked!';
};

const clickHandler2 = function() {
  this.textContent = 'Clicked!';
};

buttonEl.addEventListener('click', clickHandler1);
