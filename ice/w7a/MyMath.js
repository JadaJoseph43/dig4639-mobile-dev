// Produces the sum of the two nparameters
/**
 * 
 * @param {a} a The first numbr
 * @param {b} b The second number
 */
export function Sum (a, b) {
  if(typeof a == 'number' && typeof b == 'number')
  return (a+b);
  
  else
    return undefined;
}

export function AddList(list) {
  return 0;

}

let op1 = "Ten";
let op2 = 2;
let result = Sum(op1,op2);
if(result==op1+op2) {
  console.log("It WORKED!");
} else {
  console.log("Expected " + op1+op2 + ", but got " + result);
}