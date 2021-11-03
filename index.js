function receivesAFunction(callback) {
    callback()
}
function returnsANamedFunction() {
    return function activity() {
        console.log("returns a named function")
    }
}
function returnsAnAnonymousFunction() { 
    return () => console.log("anonymous function")
}