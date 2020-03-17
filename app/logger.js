//export as a regular ES6 module and as an arrow function
export default (message) =>{
    console.log(new Date(Date.now()), " - ", message);
}
