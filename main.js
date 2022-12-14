function zeropara(){
 console.log("Zero parameter");
}
zeropara();

function twopara(num1,num2){
    console.log(num1+num2);
}
twopara(3,4)


var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Print output

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

function factorial(n){
    let fact=1;
    for (let i=n; i>=1; i--) {
        fact *= i;
    }
    return(fact);
}
console.log(factorial(5));

