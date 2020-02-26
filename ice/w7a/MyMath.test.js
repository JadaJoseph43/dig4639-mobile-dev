import { Sum, AddList, DivideBy } from './MyMath.js'

describe('Testing AddList', () => {
  it('Return the sum of a list of numbers', () =>
  {
  let list = [1,2,3,4];
  let result = AddList(list);
  expect(result).toBe(0);
  list =[1,2,3,4,100,10000]
  expect(result).toBe(1010);
  })
it('emebr of list is undefined', () => 
{

describe('Testing Sum', () => {
  it('Adds a string and a number and get undefined', () => {
    var result = Sum("Test", 5);
    expect(result).toBeUndefined();


});
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
  
  test('border cases', () => {
    expect(Sum(-10,5)).toBe(-5)
    // expect(Sum(.1, .2)).toBe(.3)
    expect(Sum(10000000000, 1000000000)).toBe(11000000000);
  
  })
});

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
