// Pure function, we need not to
// it does no depend on anything from exterior
// it does not affect to outside
// They CAN'T change parameters passed to it
// Rules:
// 1. Same output with the same input
// 2. No sideeffects, don't use variables from outside neither change them
// 3. Avoid async calls or promises, don't do any api call.
function add (a, b) {
    return a + b;
}

// NON-pure
var a = 3;
function add (b) {
    return a + b;
}

var result;
function add (b) {
    result = a + b;
    return result;
}

// Changing the same object we pass as parameter?? no
// We cant' do this, because it is not pure!
/*function changeProp(obj) {
    obj.name = 'Eugene';
    return obj;
}*/

//This approach is better. We change an object with a PURE FUNCTION!!
// we override individual properties
// ES6: we return a new object!! and we change just one thing
function changeProp(obj) {
    return {
        ...obj,
        name: 'Eugene'
    }
}

var intialValue = {
    name: 'SquidWard',
    age: 26
};
var res = changeProp(intialValue);
console.log(intialValue);
console.log(res)

// The same happens with arrays, we have to be careful when passing to pass objects or arrays