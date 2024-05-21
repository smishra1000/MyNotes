// tests/spec/math.spec.js
import { add, subtract, multiply,filterByAge  } from '../../src/math.js';
import divide from '../../src/math.js';

describe('Math Module', () => {
  describe('add function', () => {
    it('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers correctly', () => {
      expect(add(-2, 3)).toBe(1);
    });
  });

  describe('subtract function', () => {
    it('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative numbers correctly', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should handle multiplication by zero correctly', () => {
      expect(multiply(2, 0)).toBe(0);
    });
  });

  describe('divide function', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle division by zero', () => {
      expect(() => divide(10, 0)).toThrowError('Division by zero');
    });
  });
  describe('filterByAge function', () => {
    const people = [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 20 },
      { name: 'Jim', age: 30 },
      { name: 'Jack', age: 18 }
    ];

    it('should filter people older than a given age', () => {
      const result = filterByAge(people, 20);
      expect(result).toEqual([
        { name: 'John', age: 25 },
        { name: 'Jim', age: 30 }
      ]);
    });

    it('should return an empty array if no one is older than the given age', () => {
      const result = filterByAge(people, 35);
      expect(result).toEqual([]);
    });

    it('should include people exactly the given age', () => {
      const result = filterByAge(people, 20);
      expect(result).not.toContain({ name: 'Jane', age: 20 });
    });
  });
});
