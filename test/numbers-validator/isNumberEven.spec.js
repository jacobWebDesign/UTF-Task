import { expect } from 'chai';
import NumbersValidator from '../../app/numbers_validator.js';

describe('isNumberEeven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return true when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
  it('should throw an error when provided is not an array', () => {
    expect(() => {
      validator.isAllNumbers('"string"');
    }).to.throw('["string"] is not an array')
  });

  it('should throw an error when variable is not an integer', () => {
    expect(() => {
      
      validator.isInteger("string");
    }).to.throw('[string] is not a number')
  });

  it('should return even numbers from an array', () => {
    const inVar = [2,3,4,5,6]
    const validationResults = validator.getEvenNumbersFromArray(inVar);
    const rightArray = [2,4,6];
    expect(validationResults).to.deep.equal(rightArray);

  });

  it('should throw an error when provided variable is not an array', () => {
    expect(() => {
      validator.getEvenNumbersFromArray('"string"');
    }).to.throw('["string"] is not an array')
  });

  it('should return true when array contains only numbers', () => {
    const inArr = [2,3,4,5];
    const validationResults = validator.isAllNumbers(inArr);
    expect(validationResults).to.be.equal(true);
  });

  it('should return true when provided variable is an integer ', () => {
    
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });
});
